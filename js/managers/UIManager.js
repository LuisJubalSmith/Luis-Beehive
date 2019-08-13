class UIManager {
    constructor(pAppManager) {
        this.appManager = pAppManager;
        this.beesComponent = new BeesComponent(this);
        this.postsComponent = new PostsComponent(this);
        this.albumsComponent = new AlbumsComponent(this);
        this.todosComponent = new TodosComponent(this);
        this.newCommentComponent = new NewCommentComponent(this);
        this.selectedBee = null;

        this.newBtn = document.getElementById('newBtn');
        this.newBtn.onclick = this.newBtnOnClick.bind(this);

        this.isShowingPost = true;
    }

    showUI() {
        this.beesComponent.showBees(this.appManager.dataManager.bees);
    }

    showBeePosts(bee) {
        this.enableNewBtn();
        this.isShowingPost = true;
        this.selectedBee = bee;
        this.postsComponent.showBeePosts(bee);
        this.postsComponent.show();
        this.albumsComponent.hide();
        this.todosComponent.hide();
        this.newCommentComponent.hide();
    }

    showBeeAlbums(bee) {
        this.disableNewBtn();
        this.isShowingPost = false;
        this.selectedBee = bee;
        this.albumsComponent.showBeeAlbums(bee);
        this.postsComponent.hide();
        this.albumsComponent.show();
        this.todosComponent.hide();
        this.newCommentComponent.hide();
    }

    showBeeTodos(bee) {
        this.enableNewBtn();
        this.isShowingPost = false;
        this.selectedBee = bee;
        this.todosComponent.showBeeTodos(bee);
        this.postsComponent.hide();
        this.albumsComponent.hide();
        this.todosComponent.show();
        this.newCommentComponent.hide();
    }

    showNewCommentComponent(post) {
        this.disableNewBtn();
        this.postsComponent.hide();
        this.albumsComponent.hide();
        this.todosComponent.hide();
        this.newCommentComponent.show(post);
    }
    
    hideNewCommentComponent() {
        this.showBeePosts(this.selectedBee);
    }

    newBtnOnClick() {
        if (this.isShowingPost) {

        } else {

        }
    }

    disableNewBtn() {
        this.newBtn.disabled = true;
    }

    enableNewBtn() {
        this.newBtn.disabled = false;
    }
}