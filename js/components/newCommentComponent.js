class NewCommentComponent {
    constructor(pUIManager) {
        this.model = null;
        this.uiManager = pUIManager;
        this.container = document.getElementById('newCommentComponent');

        this.name = document.createElement('input');
        this.container.appendChild(this.name);
        this.name.placeholder = 'Title';

        this.body = document.createElement('textarea');
        this.container.appendChild(this.body);
        this.body.placeholder = 'body';
        this.body.rows = 4;
        this.body.cols = 40;

        this.completeBtn = document.createElement('button');
        this.container.appendChild(this.completeBtn);
        this.completeBtn.onclick = this.completeBtnOnClick.bind(this);
        this.completeBtn.innerHTML = 'Add';
        this.completeBtn.classList.add('addButton');
    }

    completeBtnOnClick() {
        let comment = new Comment(0, 0, this.name.value, this.body.value, this.uiManager.appManager.dataManager.bee.email);
        this.model.comments.unshift(comment);
        this.model = null;
        this.uiManager.hideNewCommentComponent();
        this.name.value = '';
        this.body.value = '';
    }

    show(pmodel) {
        this.model = pmodel;
        this.container.hidden = false;
    }

    hide() {
        this.container.hidden = true;
    }
}