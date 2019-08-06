class TodosComponent {
    constructor(pUIManager) {
        this.uiManager = pUIManager;
        this.container = document.getElementById('todosComponent');
    }

    showBeeTodos(bee) {
        this.container.innerHTML = '';
        bee.todos.forEach(todo => {
            let todoComponent = new TodoComponent(todo, this.container, this.uiManager);
        });
    }

    show() {
        this.container.hidden = false;
    }

    hide() {
        this.container.hidden = true;
    }
}