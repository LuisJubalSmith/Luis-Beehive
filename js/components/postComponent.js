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
        this.addBtn.innerHTML = this.model.addBtn;
        this.addBtn.appendChild(this.addBtn);
    }
}