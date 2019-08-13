class BeesComponent {
    constructor(pUIManager) {
        this.uiManager = pUIManager;
        this.container = document.getElementById('beesComponent');
    }

    showBees(bees) {
        this.container.innerHTML = '';
        bees.forEach(bee => {
            // console.log(bee);

            let beeComponent = new BeeComponent(bee, this.container, this.uiManager);
        });
    }
}