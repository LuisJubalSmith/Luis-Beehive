class DataManager {
    constructor(appManager) {
            this.appManager = appManager;
            this.url = 'https://jsonplaceholder.typicode.com/';
            this.users = [];
            this.getData();

        }
        /*
        https://jsonplaceholder.typicode.com/
        posts	100 posts
        comments	500 comments
        albums	100 albums
        photos	5000 photos
        todos	200 todos
        users	10 users
        */
    getData() {
        console.log('downloadData');
        this.getUsers();
    }

    getUsers() {
        let request = new XMLHttpRequest();
        request.open('GET', this.url + 'users', true);
        request.onreadystatechange = this.getUsersCallback.bind(this);
        request.send();
    }

    getUsersCallback(e) {
        let request = e.target;
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                const data = JSON.parse(request.response);
                console.log(data);

                //When all users area parsed
                this.getPosts();
                this.getComments();
                this.getAlbums();
                this.getPhotos();
                this.getTodos();
            }
        }
    }

    getPosts() {
        let request = new XMLHttpRequest();
        request.open('GET', this.url + 'posts', true);
        request.onreadystatechange = this.getPostsCallback.bind(this);
        request.send();
    }

    getPostsCallback(e) {
        let request = e.target;
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                const data = JSON.parse(request.response);
                console.log(data);
            }
        }
    }

    getComments() {
        let request = new XMLHttpRequest();
        request.open('GET', this.url + 'comments', true);
        request.onreadystatechange = this.getCommentsCallback.bind(this);
        request.send();
    }

    getCommentsCallback(e) {
        let request = e.target;
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                const data = JSON.parse(request.response);
                console.log(data);
            }
        }
    }

    getAlbums() {
        let request = new XMLHttpRequest();
        request.open('GET', this.url + 'albums', true);
        request.onreadystatechange = this.getAlbumsCallback.bind(this);
        request.send();
    }

    getAlbumsCallback(e) {
        let request = e.target;
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                const data = JSON.parse(request.response);
                console.log(data);
            }
        }
    }

    getPhotos() {
        let request = new XMLHttpRequest();
        request.open('GET', this.url + 'photos', true);
        request.onreadystatechange = this.getPhotosCallback.bind(this);
        request.send();
    }

    getPhotosCallback(e) {
        let request = e.target;
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                const data = JSON.parse(request.response);
                console.log(data);
            }
        }
    }

    getTodos() {
        let request = new XMLHttpRequest();
        request.open('GET', this.url + 'todos', true);
        request.onreadystatechange = this.getTodosCallback.bind(this);
        request.send();
    }

    getTodosCallback(e) {
        let request = e.target;
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                const data = JSON.parse(request.response);
                console.log(data);
            }
        }
    }

    setUserPost(post) {
        this.users.forEach(user => {
            if (user.id === post.userid) {
                //add post to user
            }
        });
    }



}