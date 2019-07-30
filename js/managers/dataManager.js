class DataManager {
    constructor(pappManager) {
        this.appManager = pappManager;
        this.url = 'https://jsonplaceholder.typicode.com/';
        this.bees = [];
        this.getData();

    };
    /*
    https://jsonplaceholder.typicode.com/
    posts	100 posts
    comments	500 comments
    albums	100 albums
    photos	5000 photos
    todos	200 todos
    users	10 users
    */

    //all GET
    getData() {

        const request = this.getUsers();
    }

    getUsers() {

        const request = this.createRequest('users', this.getUsersCallback);
        // let request = new XMLHttpRequest();
        // request.open('GET', this.url + 'users', true);
        // request.onreadystatechange = this.getUsersCallback.bind(this);
        // request.send();
    }

    getPosts() {

        const request = this.createRequest('posts', this.getPostsCallback);

    }

    getComments() {

        const request = this.createRequest('comments', this.getCommentsCallback);

    }

    getAlbums() {

        const request = this.createRequest('albums', this.getAlbumsCallback);

    }

    getPhotos() {

        const request = this.createRequest('photo', this.getPhotosCallback);

    }

    getTodos() {

        const request = this.createRequest('todos', this.getTodosCallback);

    }

    createRequest(value, callback) {
        let request = new XMLHttpRequest();
        request.open('GET', this.url + value, true);
        request.onreadystatechange = callback.bind(this);
        request.send();
        return request;
    }

    // All callback

    getUsersCallback(e) {
        let request = e.target;

        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                const data = JSON.parse(request.response);
                // console.log(data);

                let geo = new Geo(0, 0);
                let address = new Address('San Jose', geo, 'De la iglesia San Bruno 100 mts oeste y luego 100 mts norte, condominio Villa Robledo casa nro 4, Colima de Tibas. San Juan de Tibas');
                let company = new Company('Proyecto Progra dinamica', 'Aplicacion red social', 'luisBeehive');
                let bee = new Bee(0, 'Luis Smith', 'smith8776', 'jubal8776@gmail.com', address, '(506)70220930', 'LuiSmith.com', 'LuiSmith Company');
                this.bees.push(bee);

                data.forEach(userData => {

                    geo = new Geo(userData.address.geo.lat, userData.address.geo.lng);
                    address = new Address(userData.address.city, geo, userData.address.street, userData.address.suite, userData.address.zipcode);
                    company = new Company(userData.company.bs, userData.company.catchPhare, userData.company.name);
                    bee = new Bee(userData.id, userData.name, userData.username, userData.email, address, userData.phone, userData.website, company);
                    this.bees.push(bee);


                })


                //When all users area parsed
                this.getPosts();
                // this.getComments();
                this.getAlbums();
                // this.getPhotos();
                // this.getTodos();
            }
        }
    }

    getPostsCallback(e) {
        let request = e.target;

        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                const postsData = JSON.parse(request.response);

                postsData.forEach(postData => {
                    let post = new Post(postData.id, postData.userId, postData.body, postData.title);
                    this.addPostToBee(post);
                });
                // console.log(this.bees);
            };
            this.getComments();
        }
    }



    getCommentsCallback(e) {
        let request = e.target;
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                const postsData = JSON.parse(request.response);
                // console.log(postsData);
                postsData.forEach(postData => {
                    // console.log(postData);
                    let comment = new Comment(postsData.email, postsData.id, postsData.name, postsData.postId);
                    this.addCommenstToBee(comment);

                });

            }
        }
    }

    getAlbumsCallback(e) {
        let request = e.target;
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                const postsData = JSON.parse(request.response);
                console.log(postsData);

                postsData.forEach(postsData => {
                    let album = new Album(postsData.id,
                        postsData.title, postsData.userId);
                    this.addAlbumToBee(album)
                })
            }
        }
    }

    getPhotosCallback(e) {
        let request = e.target;

        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                const photosData = JSON.parse(request.response);

                photosData.forEach(photosData => {
                        let photo = new photo(photo.albumId, photo.id, photo.thumbnailUrl, photo.title);
                        this.addPhotosToAlbum(photos);
                    })
                    // console.log(data);
            }
        }
    }

    getTodosCallback(e) {
        let request = e.target;
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                const todosData = JSON.parse(request.response);

                todosData.forEach(todosData => {

                        let todos = new Todos(todo.userId, todo.title, todo.id, todo.completed);
                        this.addTodosToBee(todos);
                    })
                    // console.log(data);
            }
        }
    }

    // All add

    addPostToBee(post) {
        for (let i = 0; i < this.bees.length; i++) {
            const bee = this.bees[i];
            if (bee.id === post.userId) {
                bee.posts.push(post);
                break;
            }
        }
    }

    addCommenstToBee(comment) {
        for (let i = 0; i < this.bees.length; i++) {
            const bee = this.bees[i];
            for (let x = 0; x < bee.posts.length; x++) {
                const post = bee.posts[x];
                if (post.id === comment.postId) {
                    post.comments.push(comment);
                    break;

                }

            }
        }
    }

    addAlbumToBee(album) {
        for (let i = 0; i < this.bees.length; i++) {
            const bee = this.bees[i];
            if (bee.id === album.userId) {
                bee.albums.push(album);
                break;
            }
        }
    }

    addPhotosToAlbum(photo) {
        for (let i = 0; i < this.bees.length; i++) {
            const bee = this.bees[i];
            for (let x = 0; x < bee.albums.length; x++) {
                const album = bee.albums[x];
                if (album.id === photo.albumId) {
                    album.photo.push(photo);
                    break
                };
            };

        };
    };

    addTodosToBee(todo) {
        for (let i = 0; i < this.bees.length; i++) {
            const bee = this.bees[i];
            if (bee.id === todo.userId) {
                bee.todos.push(todo);
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