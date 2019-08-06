class AlbumsComponent {
    constructor(pUIManager) {
        this.uiManager = pUIManager;
        this.container = document.getElementById('albumsComponent');
    }

    showBeeAlbums(bee) {

    }

    show() {
        this.container.hidden = false;
    }

    hide() {
        this.container.hidden = true;
    }
}