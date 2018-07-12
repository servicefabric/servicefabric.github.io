
var treeModel = [
    {
        text: "<span class='brand-name icon node-icon'><span style='padding-right: 0px' class='text-white text-bold'>SCALE</span><span class='text-blue text-bold'>CUBE</span></span>",
        id : "529621b7e4b0a808adf48a31",
        type : "ORG",
        backColor:"black",
        nodes: [
            {
                text: "API Gateway",
                id : "629621b7e4b0a808adf48a32",
                type : "API",
                backColor:"black",
                nodes: [
                    {
                        id : "729621b7e4b0a808adf48a33",
                        text: "WebSocket Greeting Once",
                        backColor:"black",
                        data: {"q":"/greeting/one","sid":1,"d":"hello"}
                    },{
                        id : "729621b7e4b0a808adf48a33",
                        text: "WebSocket Greeting Many",
                        backColor:"black",
                        data: {"q":"/greeting/many","sid":1,"d":"hello"}
                    },
                    {
                        id : "729621b7e4b0a808adf48a33",
                        text: "WebSocket Complete Signal",
                        backColor:"black",
                        data: {"sid": 1, "sig": 3}
                    },{
                        id : "829621b7e4b0a808adf48a34",
                        text: "RSocket Greeting Once",
                        backColor:"black",
                        data: { metadata : {"q": "/greeting/one"}, data:"hello" }
                    },{
                        id : "829621b7e4b0a808adf48a34",
                        text: "RSocket Greeting Many",
                        backColor:"black",
                        data: { metadata : {"q": "/greeting/many"}, data:"hello" }
                    }
                ]
            }
        ]
    }
];

function getTree() {
    return treeModel;
}
var handler;

class ApiTree {

    constructor(container, callback) {
        this.containerId = '#'+container;
        handler = callback;
        this.render();
    }

    render() {
        var tree = $(this.containerId).treeview({
            levels: 2,
            showTags: true,
            data: getTree(),
            onhoverColor: 'black',

            onNodeSelected: function(e, node) {
                if (typeof node.data != "undefined") {
                    handler(node);
                }
            },
            onNodeChecked: undefined,
            onNodeCollapsed: undefined,
            onNodeDisabled: undefined,
            onNodeEnabled: undefined,
            onNodeExpanded: undefined,
            onNodeUnchecked: undefined,
            onNodeUnselected: undefined,
            onSearchComplete: undefined,
            onSearchCleared: undefined
        });
    }

    addNode(text, nodeText,nodeData ) {
        var newNode = {
            text: text,
            backColor:"black",
                nodes: [{
                    text: nodeText,
                    backColor:"black",
                    data: nodeData
                }
            ]
        };
        treeModel[0].nodes.push(newNode);
        this.render();
    }
}



