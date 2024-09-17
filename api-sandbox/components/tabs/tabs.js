class Tabs {

    constructor(containerId) {
        this.tabs = new Map();
        let list = document.getElementById(containerId).children;

        for(var i = 0; i < list.length; i++) {
            var elem = list[i];
            this.tabs.set(elem.id, elem);
        }
    }

    selected(){
        return this.selectedTab;
    }

    show(id) {
        if(this.tabs.has(id)){
            this.hideAll();
            this.tabs.get(id).style.display = null;
            this.tabs.get(id).style.visibility = null;
            this.selectedTab = id;
        }
    }
    hideAll() {
        this.tabs.forEach((tab)=>{
            tab.style.display = "none";
            tab.style.visibility = "hidden";
        });
    }
}