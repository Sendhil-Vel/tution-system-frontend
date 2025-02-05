export class UpdateFlaggedPost {
    
    private postid: number = NaN;
    private flagid: number = NaN;

    constructor() {}

    setPostId(postid: number) {
        this.postid = postid;
    }

    getPostId() {
        return this.postid;
    }

    setFlagId(flagid: number) {
        this.flagid = flagid;
    }

    getFlagId() {
        return this.flagid;
    }
 
}
