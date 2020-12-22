class Window{
    constructor(width,height,background,id) {
        this.width = width;
        this.height = height;
        this.background = background;
        this.id = id;
    }
    create(parent){


        let shadow = document.createElement("div");
        shadow.style.backgroundColor = "grey";
        shadow.style.width = "100%";
        shadow.style.height = "100%";
        shadow.style.position = "fixed";
        shadow.id = this.id;
        shadow.top = 0;
        shadow.left = 0;
        shadow.style.zIndex = 1
        parent.append(shadow);

        let div = document.createElement("div");
        div.style.backgroundColor = this.background;
        div.style.width = this.width+"%";
        div.style.height = this.height+"%";
        div.style.position = "fixed";
        div.style.left = 50-((this.width)/2)+"%";
        div.style.top = 50-((this.height)/2)+"%";
        div.id = this.id;
        parent.append(div);


    }
}

let Window1 = new Window(90,90,"black");

Window1.create(document.body);