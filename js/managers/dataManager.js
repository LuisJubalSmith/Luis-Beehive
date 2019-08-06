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

        const request = this.createRequest('photos', this.getPhotosCallback);

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
<<<<<<< HEAD
                // this.getAlbums();
                // this.getTodos();
                // console.log(this.bees);
=======
>>>>>>> c48440f37f52efb2492d02a993f27c4f289d3eea
            }
        }
    }

    getPostsCallback(e) {
        let request = e.target;

        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                const postsData = JSON.parse(request.response);

                let post = new Post(101, 0, 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum quidem quo, quod hic blanditiis ', 'Aprediendo Objetos');
                this.addPostToBee(post);

                post = new Post(102, 0, 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum quidem quo, quod hic blanditiis ', 'Aprediendo Objetos');
                this.addPostToBee(post);

                postsData.forEach(postData => {
                    post = new Post(postData.id, postData.userId, postData.body, postData.title);
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
                const commentsData = JSON.parse(request.response);

                let comment = new Comment(501, 101, 'Carlos Vargas', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum quidem quo, quod hic blanditiis', 'luis@gmail.com');
                this.addCommenstToPost(comment);

                comment = new Comment(502, 101, 'Carlos Vargas', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum quidem quo, quod hic blanditiis', 'luis@gmail.com');
                this.addCommenstToPost(comment);

                comment = new Comment(503, 101, 'Carlos Vargas', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum quidem quo, quod hic blanditiis', 'luis@gmail.com');
                this.addCommenstToPost(comment);

                comment = new Comment(504, 102, 'Carlos Vargas', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum quidem quo, quod hic blanditiis', 'luis@gmail.com');
                this.addCommenstToPost(comment);

                comment = new Comment(505, 102, 'Carlos Vargas', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum quidem quo, quod hic blanditiis', 'luis@gmail.com');
                this.addCommenstToPost(comment);

                comment = new Comment(506, 102, 'Carlos Vargas', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum quidem quo, quod hic blanditiis', 'luis@gmail.com');
                this.addCommenstToPost(comment);

                commentsData.forEach(commentsData => {
                    // console.log(postData);
                    comment = new Comment(
                        commentsData.id,
                        commentsData.postId,
                        commentsData.name,
                        commentsData.body,
                        commentsData.email
                    );

                    this.addCommenstToPost(comment);
                });
<<<<<<< HEAD
                this.getAlbums();
=======

                this.getAlbums();


>>>>>>> c48440f37f52efb2492d02a993f27c4f289d3eea
            }
        }
    }


    getAlbumsCallback(e) {
        let request = e.target;
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                const albumData = JSON.parse(request.response);
<<<<<<< HEAD
                // console.log(albumData);
=======
>>>>>>> c48440f37f52efb2492d02a993f27c4f289d3eea

                let album = new Album(101,
                    'Album Prueba', 0);
                this.addAlbumToBee(album)


                albumData.forEach(albumData => {
                    album = new Album(albumData.id,
                        albumData.title, albumData.userId);
                    this.addAlbumToBee(album)
<<<<<<< HEAD
                });
                this.getPhotos();
=======
                })

                this.getPhotos();

>>>>>>> c48440f37f52efb2492d02a993f27c4f289d3eea
            }
        }
    }

    getPhotosCallback(e) {
        let request = e.target;

        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                const photosData = JSON.parse(request.response);

                let photo = new Photo(101, 5001, '../../img/img1.jpg', 'Prueba foto', '../../img/img1.jpg');
                this.addPhotosToAlbum(photo);

                photosData.forEach(photosData => {
                    photo = new Photo(photosData.albumId, photosData.id, photosData.thumbnailUrl, photosData.title);
                    this.addPhotosToAlbum(photo);
                })
<<<<<<< HEAD
=======

>>>>>>> c48440f37f52efb2492d02a993f27c4f289d3eea
                this.getTodos();
                console.log(this.bees);
            }
        }
    }

    getTodosCallback(e) {
        let request = e.target;
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                const todosData = JSON.parse(request.response);

                let todos = new Todo(0, '201', 'Lorem ipsum dolor sit', 'true');
                this.addTodosToBee(todos);

                todosData.forEach(todosData => {
                    let todos = new Todos(todosData.userId, todosData.title, todosData.id, todosData.completed);
                    this.addTodosToBee(todos);
                })

<<<<<<< HEAD
                        todos = new Todo(todosData.userId, todosData.title, todosData.id, todosData.completed);
                        this.addTodosToBee(todos);
                    })
                    // console.log(data);
=======
>>>>>>> c48440f37f52efb2492d02a993f27c4f289d3eea
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

    addCommenstToPost(comment) {
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
                    album.photos.push(photo);
                    break
                };
            };

        };
    };


    setUserPost(post) {
        this.users.map(user => {
            if (user.id === post.userid) {
                //add post to user
            }
        });
    }

    addTodosToBee(todo) {
        for (let i = 0; i < this.bees.length; i++) {
            const bee = this.bees[i];
            if (bee.id === todo.userId) {
                bee.todos.push(todo);
                break
            }
        }
    }


}