
var treeModel = [];

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

    import(url){
        let response = getJSON (url, function (status, model) {
            if(status===null) {
                tree.pushModel(model);
            }
        });
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
    pushModel(tree) {
        treeModel.push(tree);
        this.render();
    }

    append(parentId,node) {
        let parent = this.node(parentId);

        node.backColor = "black"
        parent.nodes.push(node);

    }

    node(id, node) {
        if(node==undefined){
            node = treeModel;
        }

        let i = 0;
        let search = id.split('/');
        let root = node.find(parent=>parent.id === search[i]);
        if(search.length===1){
            return root;
        }

        // looking for sub items.
        i++;
        let parent = root;
        let result = null;
        for(; i < search.length ; i++) {
            result = parent.nodes.find( item => item.id === search[i] );
            parent = result;
        }

        return result;
    }
}



