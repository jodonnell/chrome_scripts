$(document).ready(function(){
    block_websites();
    eztv();
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
