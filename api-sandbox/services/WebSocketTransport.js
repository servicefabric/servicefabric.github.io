class WebSocketTransport {

    constructor(wsuri) {
        this.uri = wsuri;

        this.subject = rxjs.webSocket.webSocket(wsuri);
        this.status = true;
    };

    onStatusChanged(statusCallback){
        this.statusChangedCallback = statusCallback;
    };

    isConnected() {
        return this.status;
    }

    uri(){
        return this.uri;
    }
    next (next) {
        this.subject.next(next);
    };

    disconnect() {
        this.status = false;
        this.subject.unsubscribe();
    };

    listen() {
        return this.subject;
    };


}
