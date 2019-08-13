class PhotoComponent {
    constructor(pmodel, pparent, pUIManager) {
        this.uiManager = pUIManager;
        this.model = pmodel;
        this.parent = pparent;

        this.container = document.createElement('div');
        this.parent.appendChild(this.container);
        this.container.classList.add('photoComponent');

        this.title = document.createElement('p');
        this.title.classList.add('photoTitle');
        this.container.appendChild(this.title);
        this.title.innerHTML = this.model.title;

        var myImage = new Image(100, 100);
        myImage.src = this.model.thumbnailUrl;
        this.container.appendChild(myImage);

    }
}