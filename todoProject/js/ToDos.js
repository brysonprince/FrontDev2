export default class toDo {
    constructor() {
        this.id = Date.now();
        this.content = "";
        this.completed = false;
    }

    setContent(content) {
        this.content = content;
    }
}