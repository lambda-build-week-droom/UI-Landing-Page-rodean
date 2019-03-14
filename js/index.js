class Tab{
    constructor(tabElement){
        this.tabElement = tabElement;
        console.log(tabElement);
        this.tabId = this.tabElement.dataset.tab;
        this.tabContent = document.querySelector(`.features-content[data-tab="${this.tabId}"]`);
        //console.log(this.tabId);
       /* 
        this.content = document.querySelectorAll(".features-content");
        this.content.forEach(function(contentInfo){
            return new Content(contentInfo);
        });*/
        this.featureContent = new Content(this.tabContent);
        this.tabElement.addEventListener("click", () => this.selected());      
    }
    selected(){
        console.log("clicked");
       const allTabs = document.querySelectorAll(".tab-button");
        allTabs.forEach(function(tabInfo){
            tabInfo.classList.remove("selected");
        });
        this.tabElement.classList.add("selected");
        
        this.featureContent.contentSelected();
        
    }
}

class Content {
    constructor(contentInfo){
        this.content = contentInfo;
        console.log(this.content);
        this.contentId = this.content.dataset.tab;
    }
    contentSelected(){
        const selected = document.querySelectorAll(".features-content");
        selected.forEach(function(content){
            content.classList.add("hide-content");
        });
        this.content.classList.remove("hide-content");
    }
}

const tabs = document.querySelectorAll(".tab-button");
tabs.forEach(function(tabInfo){
    return new Tab(tabInfo);
})

const menu = document.querySelector(".nav-bar-mobile");
const menuButton = document.querySelector(".menu-button")
menuButton.addEventListener("click", function(){
    return menu.classList.toggle("hide-content");
});

const links = document.querySelectorAll(".nav-bar-mobile div");
links.forEach(function(link){
    link.addEventListener("click", function(){
        menu.classList.toggle("hide-content")
    });
});
