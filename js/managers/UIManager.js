class UIManager {
    constructor(pAppManager) {
        this.appManager = pAppManager;
        this.beesComponent = new BeesComponent(this);
        this.postComponent = new PostComponent(this);
        this.albumsComponent = new AlbumsComponent(this);
        this.todosComponent = new TodosComponent(this);
    }

    showUI() {
        this.beesComponent.showBees(this.appManager.dataManager.bees);
    }

    showBeePosts(bee) {
        this.postsComponent.showBeePosts(bee);
        this.postsComponent.show();
        this.albumsComponent.hide();
        this.todosComponent.hide();

    }

    showBeeAlbums(bee) {
        this.postsComponent.hide();
        this.albumsComponent.show();
        this.todosComponent.hide();
    }

    showBeeTodos(bee) {
        this.todosComponent.showBeeTodos(bee);
        this.postsComponent.hide();
        this.albumsComponent.hide();
        this.todosComponent.show();
    }
}