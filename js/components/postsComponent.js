class PostsComponent {
    constructor(pUIManager) {
        this.uiManager = pUIManager;
        this.container = document.getElementById('postsComponent');

    }

    showBeePosts(bee) {
        this.container.innerHTML = '';
        bee.posts.forEach(post => {
            let postComponent = new PostComponent(post, this.container, this.uiManager);
        });
    }

    show() {
        this.container.hidden = false;

    }

    hide() {
        this.container.hidden = true;
    }
}