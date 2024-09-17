
var account;
function accountEventPublish(id){
    account.callbacks.forEach((call) => call(id));
}

class Account {

    constructor(containerId, profile, logout) {
        this.profile = profile;
        this.callbacks = new Array();
        appendHtmlElement(containerId, this.view(profile.picture, profile.name));

        document.querySelector('.mini-photo-wrapper').addEventListener('click', function() {
            document.querySelector('.account-menu-container').classList.toggle('active');
        });

        this.logoutBtn = document.getElementById('qsLogoutBtn');
        this.logoutBtn.addEventListener('click', logout);

        account = this;

    }

    listen(callback) {
        this.callbacks.push(callback);
    }


    view(img , name) {
        return "<div class='account-user-menu-wrap'>"
        +   "<div class='mini-photo-wrapper' href='#'>"
        +    "<img class='mini-photo' src='" + img +"' width='27' height='27'/>" +
            "</div>"
        +     "<div class='account-menu-container'>"
        +       "<ul class='account-user-menu'>"
        +           "<li id='profile' onclick='accountEventPublish(this.id)' class='account-user-menu__item'><div class='account-user-menu-link' href='#'>"+name+"</div></li>"
        +           "<li id='organizations' onclick='accountEventPublish(this.id)' class='user-menu__item'><div class='account-user-menu-link' href='#'>Organizations</div></li>"
        +           "<li class='user-menu__item'><div class='account-user-menu-link' href='#'><button class='myButton' id='qsLogoutBtn'>Log out</button></div></li>"
        +       "</ul>"
        +   "</div>"
        + "</div>"
    }
}