/**
 * Login Class
 */
function Login() {
	// sessionId -> user map
	this.sessionMap = {
		99999 : { name: 'Foo', email: 'foo@bar.com' }
	};
}
/**
 * Say Hello {name} to the user
 */
Login.prototype.hello = function(sessionId) {
	return 'Hello ' + this.sessionMap[sessionId].name + '\n';
};

/**
 * Check whether the given session id is valid (is in sessionMap) or not.
 */
Login.prototype.isLoggedIn = function(sessionId) {
	return sessionId in this.sessionMap;
};

/**
 * Create a new session id for the given user.
 */
Login.prototype.login = function(_name, _email) {
   /*
	* Generate unique session id and set it into sessionMap like foo@bar.com
	*/
	var sessionId = new Date().getTime();
	this.sessionMap[sessionId] = { name: _name, email: _email } 
	
	console.log('new session id ' + sessionId + ' for login::' + _email);
	
	return sessionId;
};

/**
 * Refresh the session id for the given user.
 */
 Login.prototype.refresh = function(sessionId) {
   /*
    * Refresh session id and set it into sessionMap with name and email
    */
    if(sessionId in this.sessionMap){
        var username  = this.sessionMap[sessionId].name;
        var useremail = this.sessionMap[sessionId].email;
        var newSId    = new Date().getTime();
        this.sessionMap[newSId] = { name: username, email: useremail } 
        /* Delete previous session id from map */
        delete this.sessionMap[sessionId];
        console.log('new session id ' + newSId + ' for login::' + useremail);
        return newSId;
    }
    else
    {
        console.log("Session id doesnt exist");
        return 0;
    }
        
};

/**
 * Logout from the server
 */ 
Login.prototype.logout = function(sessionId) {

        var check = false;
        if(sessionId in this.sessionMap)
        {
                delete this.sessionMap[sessionId];
                console.log('logout::' + sessionId);
                check = true;
        }
        else
        {
                console.log('Session id not found\n');
                check = false;
        }
        return check;
   /*
        * TODO: Remove the given sessionId from the sessionMap
        */
};


// Export the Login class
module.exports = new Login();
