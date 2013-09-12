var time_wasting_websites = [/reddit.com/, /facebook.com/]

function changePandoraTitle() {
    if ($('.artistSummary'))
        document.title = $('.artistSummary').html() + ' - ' + $('.songTitle').html()
}

$(document).ready(function(){
    block_websites();
    eztv();
    pandora();
    cracked();
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

function cracked() {
    if (window.location.href.match(/www.cracked.com/)) {
        $.get($('a.next:not(".disabled")')[0].href, function(data) {
            var content = $(data).find('section.body section');
            $('section.body section').append(content);
        });
    }
}
