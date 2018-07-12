var self;

class NoConnection {
    constructor(){};
    isConnected(){
        return false;
    }

    onStatusChanged(statusCallback){
        this.statusChangedCallback = statusCallback;
    };

};

class Connection {

    constructor(containerId) {
        let html = this.view();
        appendHtmlElement(containerId,html);

        var settings = new Settings('app-settings-modal');

        this.transport = new NoConnection ();

        this.connectBtn = document.getElementById("connect");
        this.connectBtn.onclick = function () {
            self.onConnect();
            self.connect(currentSettings.url);
        };

        // Get the button that opens the modal
        this.disconnectBtn = document.getElementById("disconnect");
        this.disconnectBtn.onclick = function () {
            self.onDisconnect();
            self.disconnect();
        };
        self = this;
        this.toggleButton(self.disconnectBtn);

    }

    onConnectionChanged (event) {

    };

    view() {
        return "<div style='background: #323c4a;' id='actions'>"
                + "<div id='app-settings-modal' class='modal'></div>"
                + "<button id='app-settings-btn' class='top-bar-button' title='settings' >"
                    + "<svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'>"
                        + "<line x1='4' y1='21' x2='4' y2='14'></line><line x1='4' y1='10' x2='4' y2='3'></line>"
                        + "<line x1='12' y1='21' x2='12' y2='12'></line><line x1='12' y1='8' x2='12' y2='3'></line>"
                        + "<line x1='20' y1='21' x2='20' y2='16'></line><line x1='20' y1='12' x2='20' y2='3'></line>"
                        + "<line x1='1' y1='14' x2='7' y2='14'></line><line x1='9' y1='8' x2='15' y2='8'></line>"
                        + "<line x1='17' y1='16' x2='23' y2='16'></line>"
                    + "</svg>Settings"
                + "</button>"
                + "<button class='top-bar-button' id='connect'>Connect</button>"
                + "<button class='top-bar-button' id='disconnect'>Disconnect</button>"
            + "</div>";
    }
    onConnect(){
        self.connectBtn.disabled = true;
        self.disconnectBtn.disabled = false;
    }
    onDisconnect(){
        self.disconnectBtn.disabled = true;
        self.connectBtn.disabled = false;
    }
    toggleButton(btn){
        if (btn.disabled === false) {
            btn.disabled = true;
        } else {
            btn.disabled = false;
        }
    }
    disconnect() {
        if(self.transport.isConnected()) {
            self.transport.disconnect();
            console.error("Disconnected from: " + self.transport.uri);
        } else {
            console.info("The connection is already closed...");
        }
    }

    connect(endpointUri) {
        try {
            if(currentSettings.transport === "WebSocket") {
                this.transport = new WebSocketTransport(endpointUri);
                console.info("Connected to: " + endpointUri);
            } else if (currentSettings.transport === "RSocket") {
                this.transport = new RSocketTransport(endpointUri);
                console.info("Connected to: " + endpointUri);
            } else {
                console.error(currentSettings.transport + " is Comming soon... this transport is yet supported.");
                return;
            }

            this.transport.onStatusChanged((event) => this.onConnectionChanged(event));

            this.listen().subscribe(next => {
                console.debug(JSON.stringify(next));
            },error => {
                if(error.__proto__.constructor.name === "CloseEvent") {
                    self.onDisconnect();
                }
                console.error(error.__proto__.constructor.name + " on " +  error.currentTarget.url + " encounter error: " + error.type + " reason code: " + error.code);
            });
        } catch (error){
            console.error(JSON.stringify(error));
        }
    }
    transport (){
        return this.transport;
    }

    listen(){
        return this.transport.listen();
    }

    send(msg) {
        try {
            if(this.transport.isConnected()){
                if(currentSettings.transport === "WebSocket") {
                    this.transport.next(JSON.parse(msg));
                } else {
                    this.transport.next(msg);
                }
                console.warn(msg);
            } else {
                console.error("The connection is currently Disconnected from endpoint: " + currentSettings.url + " first connect and try again.");
            }
        } catch (error) {
            console.error(error);
        }
    }
}
