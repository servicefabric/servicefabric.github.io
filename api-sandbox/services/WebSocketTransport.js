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

    requestResponse(req) {
        let p = this._response(req);
        this.next(req);
        return p;
    }

    _response(req) {
        return new Promise((resolve, reject) => {
            this.listen().subscribe((msg)=> {
                if (msg.sid.toString() === req.sid.toString()) {
                    resolve(msg);
                }
            },(error) => {
                console.log(error);
                reject(error);
            });

        });
    }
}
