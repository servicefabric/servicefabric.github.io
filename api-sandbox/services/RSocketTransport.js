var rSocket;
function serialize(resp,subject) {
    subject.next(resp);
}

class RSocketTransport {

    constructor(wsuri) {
        this.uri = wsuri;
        this.subject = new rxjs.Subject();
        // Create an instance of a client
        this.client = new rsocketCore.RSocketClient({
            // send/receive objects instead of strings/buffers
            serializers: rsocketCore.JsonSerializers,
            setup: {
                // ms btw sending keepalive to server
                keepAlive: 60000,
                // ms timeout if no keepalive response
                lifetime: 180000,
                // format of `data`
                dataMimeType: 'application/json',
                // format of `metadata`
                metadataMimeType: 'application/json',
            },
            transport: new rsocketWebsocketClient.default({url: wsuri})
        });
        this.client.connect().subscribe({
            onComplete: socket => {
                // socket provides the rsocket interactions fire/forget, request/response,
                // request/stream, etc as well as methods to close the socket.
                //console.log("Connected!");
                rSocket = socket;
            },
            onError: error => consoleLog.error(error)
        });

        this.status = true;
    };

    onStatusChanged(statusCallback){
        this.statusChangedCallback = statusCallback;
    };

    disconnect() {
        this.status = false;
        this.client.close();
    };

    isConnected() {
        return this.status;
    };

    uri(){
        return this.uri;
    };

    next (next) {
        let input = JSON.parse(next);
        let request = {
            data: input.data,
            metadata: input.metadata
        };

        send (request);
    };

    send (request) {

        let onnext = resp => serialize(resp,this.subject);
        let onerror = error => serialize(error,this.subject);
        let oncomplete = () => console.debug("Completed!");

        rSocket.requestStream(request).subscribe({
            onSubscribe: subscription => subscription.request(2147483647),
            onNext: onnext,
            onComplete: oncomplete,
            onError: onerror
        });
    };

    listen() {
        return this.subject;
    };
}


