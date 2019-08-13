class BeeComponent {
    constructor(pmodel, pparent, pUIManager) {
        this.uiManager = pUIManager;
        this.model = pmodel;
        this.parent = pparent;

        this.container = document.createElement('div');
        this.container.classList.add('beeComponent');
        this.parent.appendChild(this.container);

        this.title = document.createElement('h4');
        this.title.innerHTML = this.model.name;
        this.container.appendChild(this.title);

        this.userName = document.createElement('p');
        this.userName.innerHTML = '<b>Username: </b>' + this.model.username;
        this.container.appendChild(this.userName);

        this.email = document.createElement('p');
        this.email.innerHTML = '<b>Email: </b>' + this.model.email;
        this.container.appendChild(this.email);

        this.address = document.createElement('p');
        this.address.innerHTML = '<b>Address: </b>' + this.model.address.suite + ', ' +
            this.model.address.street + ', ' + this.model.address.city + ', ' +
            this.model.address.zipcode;
        this.container.appendChild(this.address);

        this.phone = document.createElement('p');
        this.phone.innerHTML = '<b>Phone: </b>' + this.model.phone;
        this.container.appendChild(this.phone);

        this.website = document.createElement('p');
        this.website.innerHTML = '<b>Website: ' + this.model.website;
        this.container.appendChild(this.website);

        this.buttonsContainer = document.createElement('div');
        this.buttonsContainer.classList.add('buttonsContainer');
        this.container.appendChild(this.buttonsContainer);

        this.postBtn = document.createElement('button');
        this.postBtn.innerHTML = 'Post: ' + this.model.posts.length;
        this.buttonsContainer.appendChild(this.postBtn);
        this.postBtn.onclick = this.onPostBtnClick.bind(this);

        this.albumBtn = document.createElement('button');
        this.albumBtn.innerHTML = 'Albums: ' + this.model.albums.length;
        this.buttonsContainer.appendChild(this.albumBtn);
        this.albumBtn.onclick = this.onAlbumBtnClick.bind(this);

        this.todosBtn = document.createElement('button');
        this.todosBtn.innerHTML = 'Todos: ' + this.model.todos.length;
        this.buttonsContainer.appendChild(this.todosBtn);
        this.todosBtn.onclick = this.onTodosBtnClick.bind(this);
    }

    onPostBtnClick(e) {
        this.uiManager.showBeePosts(this.model);
    }

    onAlbumBtnClick(e) {
        this.uiManager.showBeeAlbums(this.model);
    }
    onTodosBtnClick(e) {
        this.uiManager.showBeeTodos(this.model);
    }

}