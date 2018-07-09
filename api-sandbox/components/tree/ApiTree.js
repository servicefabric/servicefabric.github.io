
var treeModel = [
    {
        text: "ScaleCube",
        id : "529621b7e4b0a808adf48a31",
        type : "ORG",
        backColor:"black",
        nodes: [
            {
                text: "Service Message",
                id : "629621b7e4b0a808adf48a32",
                type : "API",
                backColor:"black",
                nodes: [
                    {
                        id : "729621b7e4b0a808adf48a33",
                        text: "Template",
                        backColor:"black",
                        data: {"q":"//", "d": {} }
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



