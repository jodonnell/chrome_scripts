var time_wasting_websites = [/reddit.com/, /facebook.com/]

$(document).ready(function(){
    for (var i = 0; i < time_wasting_websites.length; i++) {
        if (window.location.host.match(time_wasting_websites[i])) {
	    $('body').html('You do not like this website.');
        }
    }
});
