class AppManager {
    constructor() {
        this.dataManager = new DataManager(this);
    }
    completedDownload() {
        this.UIManager.showUI();
    }
}