
var url='wss://configuration-service-ws.genesis.om2.com/';

class OrganizationService {

    constructor(token) {
        this.socket  = new WebSocketTransport(url);
        this.token = token;
        this.nonce = new Nonce();
    }

    getMembership() {
        let req =  {
            "q": "/organizations/getUserOrganizationsMembership",
            "sid" :  this.nonce.generate().toString(),
            "d": {
                "token": {
                    "token": this.token
                }
            }
        };
        return this.socket.requestResponse(req);
    }

    createOrganization(name, email) {
        let req =  {
            "q": "/organizations/create",
            "sid" :  this.nonce.generate().toString(),
            "d": {
                "token": {
                    "token": this.token
                },
                "name": name,
                "email": email
            }
        };
        return this.socket.requestResponse(req);
    }

    getOrganization(organizationId) {
        let req =  {
            "q": "/organizations/create",
            "sid" :  this.nonce.generate().toString(),
            "d": {
                "token": {
                    "token": this.token
                },
                "organizationId": organizationId
            }
        };
        return this.socket.requestResponse(req);
    }

    /**
     *
     * @param name
     * @param organizationId
     * @param role "Owner/Admin/Member (PERMISSION LEVEL FOR API KEY TO CONFIGURATION SERVICE)"
     */
    addApiKey(name, organizationId, role) {
        let req =  {
            "q": "/organizations/addOrganizationApiKey",
            "sid" :  this.nonce.generate().toString(),
            "d": {
                "token": {
                    "token": this.token
                },
                "organizationId": organizationId,
                "apiKeyName": name,
                "claims": {
                    "role": role
                }
            }
        };
        return this.socket.requestResponse(req);
    }

    getOrganizationMembers(id) {
        let req = {
            "q": "/organizations/getOrganizationMembers",
            "sid" :  this.nonce.generate().toString(),
            "d": {
                "token": {
                    "token": this.token
                },
                "organizationId": id
            }
        };
        return this.socket.requestResponse(req);
    }
}