class TodoComponent {
    constructor(pmodel, pparent, pUIManager) {
        this.uiManager = pUIManager;
        this.model = pmodel;
        this.parent = pparent;
        this.container = document.createElement('div');
        this.container.classList.add('todoComponent');
        this.parent.appendChild(this.container);

        this.title = document.createElement('h4');
        this.title.innerHTML = this.model.title;
        this.container.appendChild(this.title);

        this.body = document.createElement('p');
        this.body.innerHTML = this.model.body;
        this.container.appendChild(this.body);

        this.complete = document.createElement('input');
        this.complete.type = 'checkbox';
        this.complete.checked = this.model.complete;
        this.container.appendChild(this.complete);
        this.complete.onchange = this.onChangeComplete.bind(this);
        this.setColor();
    }

    onChangeComplete() {
        this.model.complete = !this.model.complete;
        this.complete.checked = this.model.complete;
        this.setColor();
    }

    setColor() {
        this.container.classList.remove('todoColorComplete');
        this.container.classList.remove('todoColorNotComplete');
        if (this.model.complete) {
            this.container.classList.add('todoColorComplete');
        } else {
            this.container.classList.add('todoColorNotComplete');
        }
    }
}