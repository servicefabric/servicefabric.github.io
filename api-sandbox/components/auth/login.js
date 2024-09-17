function displayButtons() {
    let loginBtn = document.getElementById('qsLoginBtn');
    let logoutBtn = document.getElementById('qsLogoutBtn');

    if (isAuthenticated()) {
        loginBtn.style.display = 'none';
        if(logoutBtn) {
            logoutBtn.style.display = 'inline-block';
        }
    } else {
        loginBtn.style.display = 'inline-block';
        if(logoutBtn) {
            logoutBtn.style.display = 'none';
        }
    }
}

function isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = localStorage.getItem('expiresAt');
    return localStorage.getItem('isLoggedIn') === 'true' && new Date().getTime() < ( parseInt(expiresAt) || 0 );
}
function token() {
    return localStorage.getItem('idToken');
}
function accessToken() {
    return localStorage.getItem('accessToken');
}

class Login {

    constructor(elementId) {
        this.listeners = new Array();
        let html = "<div>"
            +   "<button class='myButton' id='qsLoginBtn'>Log In</button>"
            + "</div>"

        appendHtmlElement(elementId, html);
        this.entries = document.getElementById(this.id);

        this.idToken;
        this.accessToken;

        window.webAuth = new auth0.WebAuth({
            domain: AUTH0_DOMAIN,
            clientID: AUTH0_CLIENT_ID,
            redirectUri: AUTH0_CALLBACK_URL,
            responseType: 'token id_token',
            scope: 'openid profile',
            leeway: 60
        });

        // buttons and event listeners
        this.loginBtn = document.getElementById('qsLoginBtn');
        this.logoutBtn = document.getElementById('qsLogoutBtn');

        this.loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.webAuth.authorize();
        });

        if (localStorage.getItem('isLoggedIn') === 'true') {
            this.renewTokens();
        } else {
            this.handleAuthentication();
        }
    }
    getProfile() {
        return new Promise((resolve ,reject) => {
            window.webAuth.client.userInfo(accessToken(), (err, profile) => {
                if (err) {
                    reject(err);
                    return;
                } else {
                    resolve(profile);
                }
            });
        });
    }
    localLogin(authResult) {
        // Set isLoggedIn flag in localStorage
        localStorage.setItem('isLoggedIn', 'true');
        // Set the time that the access token will expire at
        let expiresAt = JSON.stringify(
            authResult.expiresIn * 1000 + new Date().getTime()
        );

        this.accessToken = authResult.accessToken;
        this.idToken = authResult.idToken;

        localStorage.setItem('expiresAt',expiresAt);
        localStorage.setItem('idToken', authResult.idToken);
        localStorage.setItem('accessToken', authResult.accessToken);
        this._notify(this.idToken);
        displayButtons();
    }
    _notify(token) {
        this.listeners.forEach(callback=>{
            callback(token);
        });
    }
    renewTokens() {
        const self = this;
        window.webAuth.checkSession({}, (err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                self.localLogin(authResult);
            } else if (err) {
                alert(
                    'Could not get a new token '  + err.error + ':' + err.error_description + '.'
                );
                self.logout();
            }
            displayButtons();
        });
    }

    logout() {
        const self = this;
        // Remove isLoggedIn flag from localStorage
        localStorage.removeItem('isLoggedIn');
        // Remove tokens and expiry time
        self.accessToken = '';
        self.idToken = '';

        localStorage.setItem('expiresAt',0);
        window.webAuth.logout({
            return_to: window.location.origin
        });

        displayButtons();
    }



    handleAuthentication() {
        const self = this;
        window.webAuth.parseHash(function(err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                self.localLogin(authResult);
                self.loginBtn.style.display = 'none';
            } else if (err) {
                console.log(err);
                alert(
                    'Error: ' + err.error + '. Check the console for further details.'
                );
            }
            displayButtons();
        });
    }


    onAuthenticated(callback) {
        this.listeners.push(callback);
    }
}