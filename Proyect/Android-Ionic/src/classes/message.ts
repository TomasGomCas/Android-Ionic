export class Message{

    // ATRITBUTOS

    // CONSTRUCTORES
    constructor(private user:string,private text:string){
        this.user=user;
        this.text=text;
    }

    // METODOS

    // GET Y SET  
    public getUser() : string {
        return this.user
    }  
    public getText() : string {
        return this.text;
    }
    
    
}