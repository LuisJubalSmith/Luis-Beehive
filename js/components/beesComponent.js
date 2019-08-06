class BeesComponent {
    constructor(pUIManager) {
        this.uiManager = pUIManager;
        this.container = document.getElementById('beesComponent');
    }

    showBees(bees) {
        this.container.innerHTML = '';
        bees.forEach(bee => {
            let beeComponent = new BeesComponent(bee, this.container, this.uiManager);
        });
    }
}