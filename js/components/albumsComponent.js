class AlbumsComponent {
    constructor(pUIManager) {
        this.uiManager = pUIManager;
        this.container = document.getElementById('albumsComponent');
    }

    showBeeAlbums(bee) {

        this.container.innerHTML = '';
        bee.albums.forEach(album => {
            let albumComponent = new AlbumComponent(album, this.container, this.uiManager);
        });
    }

    show() {
        this.container.hidden = false;
    }

    hide() {
        this.container.hidden = true;
    }
}