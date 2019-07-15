export class Task {
    constructor (public _id?:string,
                 public title?:string,
                 public completed:boolean=false,
                 public created?:number){}
}
