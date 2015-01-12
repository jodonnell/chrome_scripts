var time_wasting_websites = [/reddit.com/, /facebook.com/]

function changePandoraTitle() {
    if ($('.artistSummary'))
        document.title = $('.artistSummary').html() + ' - ' + $('.songTitle').html()
}

function changeRdioTitle() {
    if ($('.bottom .artist_title').length > 0 && $('.bottom .song_title').length > 0) {
        document.title = $('.bottom .artist_title').text() + ' - ' + $('.bottom .song_title').text();
    }
}

$(document).ready(function(){
    //block_websites();
    eztv();
    pandora();
    cracked();
    rdio();
});

function eztv() {
    if (window.location.href.match(/http:\/\/eztv.it\/showlist\//)) {
        $('.forum_thread_post').find(':contains(Airing)').parent().parent().css('background-color', '#3B3');
    }
}

function block_websites() {
    var time_wasting_websites = [/reddit.com/, /facebook.com/];

    for (var i = 0; i < time_wasting_websites.length; i++) {
        if (window.location.host.match(time_wasting_websites[i])) {
	    $('body').html('You do not like this website.');
        }
    }
}

function pandora() {
    if (window.location.href.match(/www.pandora.com/)) {
        window.setInterval("changePandoraTitle();", 5000);
    }
}

function rdio() {
    if (window.location.href.match(/www.rdio.com/)) {
        window.setInterval("changeRdioTitle();", 5000);
    }
}

function cracked() {
    if (window.location.href.match(/www.cracked.com/)) {
        $.get($('a.next:not(".disabled")')[0].href, function(data) {
            var content = $(data).find('section.body section');
            var images = $(content).find('img[data-img]');
            $(images).each(function (i, image) {
				        $(image).attr('src', $(image).attr('data-img'));
            });
            $('section.body section').append(content);
        });
    }
}
