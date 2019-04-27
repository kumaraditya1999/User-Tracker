export class Activity {
    public type: string;
    public timeStamp: Date;
    public item: string;

    constructor(type: string, timeStamp: Date, item: string ){
        this.type = type;
        this.timeStamp = timeStamp;
        this.item = item;
    }
}