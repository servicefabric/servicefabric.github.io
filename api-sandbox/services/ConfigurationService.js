var url='wss://configuration-service-rs.genesis.om2.com:7070';

class ConfigurationService {

    constructor(url, token) {
        this.token = token;
        this.socket  = new WebSocketTransport(url);
        this.nonce = new Nonce();
        this.socket.listen().subscribe((next)=>{
            console.log(next);
        });
    }

    createRepo(repoName) {
        let req =  {
            "q": "/configuration/createRepository",
            "sid" :  this.nonce.generate().toString(),
            "d": {
                "token": this.token,
                "repository": repoName
            }
        };
        return this.socket.requestResponse(req);
    }

    save(repo, key, value) {
        let req =  {
            "q": "/configuration/save",
            "sid" :  this.nonce.generate().toString(),
            "d": {
                "token": this.token,
                "repository": repo,
                "key": key,
                "value": value
            }
        };
        return this.socket.requestResponse(req);
    }


    fetch(repo, key) {
        let req =  {
            "q": "/configuration/fetch",
            "sid" :  this.nonce.generate().toString(),
            "d": {
                "token": this.token,
                "repository": repo,
                "key": key
            }
        };
        return this.socket.requestResponse(req);
    }
}