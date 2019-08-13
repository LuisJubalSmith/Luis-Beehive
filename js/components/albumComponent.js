class AlbumComponent {
    constructor(pmodel, pparent, pUIManager) {
        this.model = pmodel;
        this.parent = pparent;
        this.uiManager = pUIManager;

        this.container = document.createElement('div');
        this.container.classList.add('albumComponent');
        this.parent.appendChild(this.container);

        this.title = document.createElement('h4');
        this.container.appendChild(this.title);
        this.title.innerHTML = this.model.title;

        this.model.photos.forEach(photo => {
            let photoComponent = new PhotoComponent(photo, this.container, this.uiManager);
        });
    }
}