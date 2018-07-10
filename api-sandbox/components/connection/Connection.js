var self;

class NoConnection {
    constructor(){};
    isConnected(){
        return false;
    }
};

class Connection {

    constructor(settings,console,connectBtnId, closeConnectionBtnId,inputBoxId, sendBtnId, editor){
        self.console = console;
        self.inputValue = editor;
        this.console = console;
        this.inputValue = editor;
        this.transport = new NoConnection ();
        this.connectionElement = document.getElementById(inputBoxId);
        self.connectionElement = this.connectionElement;

        this.sendBtnId = document.getElementById(sendBtnId);
        this.sendBtnId.onclick = function () {
            self.send(self.inputValue.getValue());
        };

        this.connectBtn = document.getElementById(connectBtnId);
        this.connectBtn.onclick = function () {
            self.onConnect();
            self.connect(currentSettings.url);
        };

        // Get the button that opens the modal
        this.disconnectBtn = document.getElementById(closeConnectionBtnId);
        this.disconnectBtn.onclick = function () {
            self.onDisconnect();
            self.disconnect();
        };
        self = this;
        this.toggleButton(self.disconnectBtn);
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
            self.console.error("Disconnected from: " + self.transport.uri);
        } else {
            this.console.info("The connection is already closed...");
        }
    }

    connect(endpointUri) {
        try {
            if(currentSettings.transport === "WebSocket"){
                this.transport =  new WebSocketTransport(endpointUri);
            } else {
                this.console.error(currentSettings.transport + " is Comming soon... this transport is yet supported.");
                return;
            }

            this.console.info("Connected to: " + endpointUri);
            this.listen().subscribe( next=>{
                console.debug(next);
            },error => {
                if(error.__proto__.constructor.name === "CloseEvent") {
                    self.onDisconnect();
                }
                this.console.error(error.__proto__.constructor.name + " on " +  error.currentTarget.url + " encounter error: " + error.type + " reason code: " + error.code);
            });
        } catch (error){
            this.console.error(error);
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
                this.transport.next(msg);
                this.console.warn(msg);
            } else {
                this.console.error("The connection is currently Disconnected from endpoint: " + this.connectionElement.value + " first connect and try again.");
            }
        } catch (error) {
            this.console.error(error);
        }
    }
}
