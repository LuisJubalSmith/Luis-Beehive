class TodoUI extends HTMLElement {
    constructor(pmodel, pparent, puiManager) {
        super();
        const shadowRoot = this.attachShadow({
            mode: 'open'
        });
        this.model = pmodel;
        this.parent = pparent;
        this.uiManager = puiManager;
        this.parent.appendChild(this);
        this.render();

    }

    render() {
        // this.appendChild(this.container);
        // const t = document.createElement('template');
        const style = document.createElement('style');
        style.innerHTML = `
        div {
            height: auto;
            margin: 5px 5px 0px 5px;
            padding: 5px;
            border-radius: 5px;
            background-color:blue;
            }
            h4{
                padding:0px 0px 0px 0px;
            }
        `;

        this.container = document.createElement('div');
        // this.container.style.backgroundColor = 'blue';
        const h4 = document.createElement('h4');
        h4.innerHTML = this.model.title;
        this.container.appendChild(h4);

        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(this.container);
    }
}

window.customElements.define('todo-ui', TodoUI);