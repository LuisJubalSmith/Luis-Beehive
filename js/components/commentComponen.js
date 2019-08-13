class CommentComponent {
    constructor(pmodel, pparent, pUIManager) {
        this.uiManager = pUIManager;
        this.model = pmodel;
        this.parent = pparent;

        this.container = document.createElement('div');
        this.parent.appendChild(this.container);
        this.container.classList.add('commentComponent');

        this.name = document.createElement('h5');
        this.container.appendChild(this.name);
        this.name.innerHTML = this.model.name;

        this.body = document.createElement('p');
        this.container.appendChild(this.body);
        this.body.innerHTML = this.model.body;

        this.email = document.createElement('p');
        this.container.append(this.email);
        this.email.innerHTML = '<b>' + this.model.email + '</b>';
    }
}