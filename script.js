class Message {
    constructor(authorName, textMessage) {
        this.authorName = authorName;
        this.sendTime = new Date();
        this.textMessage = textMessage;
    }
    toString() {
        return `${this.sendTime.getHours()}:${this.sendTime.getMinutes()} ${this.authorName} ${this.textMessage}`.toString();
    }
}

class Messenger extends Message {
    constructor(authorName, textMessage) {
        super(authorName, textMessage);
        this.arr = [];
    }

    show_history() {
        this.arr.forEach(element => {
            console.log(element);
        });
    }

    send(author, text) {
        this.authorName = author;
        this.textMessage = text;
        
        this.arr.push(`${this.sendTime.getHours()}:${this.sendTime.getMinutes()} ${this.authorName} ${this.textMessage}`);
    }
    gettime() {
        let now = new Date();
        return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    }
}


let messenger = new Messenger();

messenger.send("Rufat", "txtxt");
console.log(messenger.authorName);
messenger.send("Nezin", "txtxt");
messenger.show_history();
