var time_wasting_websites = [/reddit.com/, /facebook.com/]

function changePandoraTitle() {
    if ($('.artistSummary'))
        document.title = $('.artistSummary').html() + ' - ' + $('.songTitle').html()
}

$(document).ready(function(){
    for (var i = 0; i < time_wasting_websites.length; i++) {
        if (window.location.host.match(time_wasting_websites[i])) {
	    $('body').html('You do not like this website.');
        }
    }

    if (window.location.href.match(/http:\/\/eztv.it\/showlist\//)) {
        $('.forum_thread_post').find(':contains(Airing)').parent().parent().css('background-color', '#3B3');
    }

    if (window.location.href.match(/www.pandora.com/)) {
        window.setInterval("changePandoraTitle();", 5000);
    }

});
