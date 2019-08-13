class AppManager {
    constructor() {
        this.dataManager = new DataManager(this);
        this.UIManager = new UIManager(this);
    }
    completedDownload() {
        this.UIManager.showUI();
    }
}