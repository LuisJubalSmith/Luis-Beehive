class Post {
    constructor(pid, puserId, ptitle, pbody) {
        this.id = pid;
        this.userId = puserId;
        this.title = ptitle;
        this.body = pbody;
        this.comments = [];

    }
}