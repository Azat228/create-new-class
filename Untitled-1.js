class options{
    constructor(height, width, bg, fontSize, textAlign){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    
  
    createDivContent(){
        let div = document.createElement('div');
            div.textContent = 'Я жерта эксериметнов в Es6';
            div.style.fontSize = this.fontSize;
            div.style.textAlign = this.textAlign;
            div.style.backgroundColor = this.bg;
            div.style.height = this.height;
            div.style.width = this.width;
            document.body.appendChild(div);
    }
}
let option = new options('100px','150px','red','20px','center');
option.createDivContent();
