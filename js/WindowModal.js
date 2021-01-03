class Window{
    constructor(width,height,background,id) {
        this.width = width;
        this.height = height;
        this.background = background;
        this.id = id;
        this.info;
        this.divButton;
    }
    create(parent){
        let div = document.createElement("div");
        if (this.background !== undefined){
            div.style.backgroundColor = this.background;
        }

        if (this.width !== undefined){
            div.style.width = this.width+"%";
            div.style.left = 50-((this.width)/2)+"%";
        }
        if (this.height !== undefined){
            div.style.height = this.height+"%";
            div.style.top = 50-((this.height)/2)+"%";
        }
        if (this.id === undefined){
            div.id = "modal";
        }
        else {
            div.id = this.id;
        }
        parent.append(div);
        let info = document.createElement("div");
        info.style.width = "100%";
        info.style.height = "90%";
        info.id = "info";
        div.append(info);
        let divButton = document.createElement("div");
        divButton.style.width = "100%";
        divButton.style.height = "10%";
        divButton.id = "divButton";
        let buttonCancel = document.createElement("button");
        buttonCancel.innerHTML = "CANCEL";
        let buttonValid = document.createElement("button");
        buttonValid.innerHTML = "OK";
        divButton.append(buttonCancel);
        divButton.append(buttonValid)
        div.append(divButton);
        buttonCancel.addEventListener("click",function (){
            div.remove();
        })
    }
}

let Window1 = new Window(50,50,"black");
let buttonTest = document.getElementById("test");

buttonTest.addEventListener("click", function (){
        Window1.create(document.body);
});
