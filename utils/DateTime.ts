
export class DateTime{
    readonly currentDateTime: Date;

    constructor(){
        this.currentDateTime = new Date();
    }

    async getCurrentDateTime(){
        const timeStamp: string = this.currentDateTime.getTime().toString();
        return timeStamp;
    }
}