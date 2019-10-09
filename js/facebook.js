window.fbAsyncInit = function() {
    FB.init({
      appId            : '469478263405054',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.9'
    });
    FB.AppEvents.logPageView();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

document.getElementById('logout-btn').onclick = function() {
	FB.getLoginStatus(function(response) {
		if (response.status === 'connected') {
			FB.logout(function() {console.log("bye");});
		}
		return false;
	});
}
		  
document.getElementById('login-btn').onclick = function() {
	FB.getLoginStatus(function(response) {
		if (response.status != 'connected') {
			FB.login(function(){ FB.api('me', function(){ }); },{'scope':'email, user_birthday'});
		} else {
			FB.api('/me', 'get', { fields: 'id, first_name, last_name, gender, birthday, email, picture' }, function(response) { console.log(response); });
		}
    });
	
	return false;
}