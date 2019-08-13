class PostComponent {
    constructor(pmodel, pparent, pUIManager) {
        this.uiManager = pUIManager;
        this.model = pmodel;
        this.parent = pparent;
        this.container = document.createElement('div');
        this.container.classList.add('postComponent');
        this.parent.appendChild(this.container);

        this.title = document.createElement('h4');
        this.title.innerHTML = this.model.title;
        this.container.appendChild(this.title);

        this.body = document.createElement('p');
        this.body.innerHTML = this.model.body;
        this.container.appendChild(this.body);

        this.addBtn = document.createElement('button');
        this.container.appendChild(this.addBtn);
        this.addBtn.innerHTML = 'Add New Comment';
        this.addBtn.classList.add('addButton');
        this.addBtn.onclick = this.addNewComment.bind(this);

        this.addCommentComponents();


    }

    addNewComment() {
        this.uiManager.showNewCommentComponent(this.model);
    }

    addCommentComponents() {
            this.model.comments.forEach(comment => {
                let commentComponent = new CommentComponent(comment, this.container, this.uiManager);
            });