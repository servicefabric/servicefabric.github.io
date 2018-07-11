var currentSettings;
class Settings {


    constructor(containerId) {
        let html = this.view();
        appendHtmlElement(containerId,html);
        this.modal = document.getElementById(containerId);
        this.openBtn = document.getElementById("app-settings-btn");
        // When the user clicks on the button, open the modal
        this.openBtn.onclick = function() {
            currentSettings.modal.style.display = "block";
        };

        this.closeBtn = document.getElementById("close-settings");
        this.closeBtn.onclick =  function () {
            currentSettings.close();
        };
        this.containerId = containerId;
        currentSettings = this;
        this.close();
    }

    close() {
        currentSettings.transport = getSelectValue('transport-providers');
        currentSettings.url = getInputValue('transport-url');
        this.modal.style.display = "none";
    }

    view(){
        return "<div class='item-settings-modal item-settings-modal-half open' id='item-settings-modal'>"
                    + "<div class='item-settings-halfs-wrap'>"
                        + "<div class='settings-modal-left tabs'>"
                                + "<h2>Settings</h2>"
                                + "<nav id='settings-tabs' class='explore-tabs no-mobile-nav'>"
                                + "<a id='settings-html-tab' href='#settings-html' class='settings-tab-html active' data-type='html'>Location</a>"
                                + "</nav>"
                                + "<div class='settings active' id='settings-location'>"
                                    + "<form class='settings-row settings-row-1 top-label-form normal-labels preprocessor-choice group'>"
                                        + "<h4>"
                                            + "<label for='transport-providers'>Transport</label>"
                                        + "</h4>"
                                        + "<select name='transport-providers' id='transport-providers' class='fullwidth'>"
                                            + "<option value='WebSocket'>WebSocket</option>"
                                            + "<option value='RSocket'>RSocket</option>"
                                            + "<option value='Socket.IO'>Socket.IO</option>"
                                        + "</select>"
                                    + "</form>"
                                    + "<form class='settings-row settings-row-2 top-label-form normal-labels prevent-form-submit' onsubmit='return false;'>"
                                        + "<h4>"
                                            + "<label for='transport-provider'>Address</label>"
                                        + "</h4>"
                                        + "<div class='help-flyout-link'>"
                                            + "<svg class='icon-help'>"
                                            + "<use xlink:href='#help'></use>"
                                            + "</svg>"
                                            + "<div class='help-flyout help-flyout-reverse'>"
                                                + "<h5>Adding Classes</h5>"
                                            + "</div>"
                                        + "</div>"
                                        + "<input type='text' id='transport-url' name='transport-url' class='fullwidth' value='wss://echo.websocket.org/' placeholder='ws://localhost:8080'>"
                                    + "</form>"
                                + "</div>"
                        + "</div>"
                        + "<div class='save-and-close-wrap'>"
                            + "<input type='button' class='button big button-no-right-margin green' value='Save and close' id='close-settings'>"
                        + "</div>"
                    + "</div>"
                + "</div>";
    }
}