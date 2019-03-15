class Tab{
    constructor(tabElement){
        this.tabElement = tabElement;
        this.tabId = this.tabElement.dataset.tab;
        this.tabContent = document.querySelector(`.features-content[data-tab="${this.tabId}"]`);
        this.featureContent = new Content(this.tabContent);
        this.tabElement.addEventListener("click", () => this.selected());      
    }
    selected(){
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
window.addEventListener("click",function(event){
    if(event.target !== menuButton){
        menu.classList.add("hide-content");
    }
});
