export class CreateClientDto{

    public username : String
    public name : String
    public email : String
    public cpf : String
    public celNumber : String
    public password : String

    copy(
        username : String,
        name : String,
        email : String,
        cpf : String,
        celNumber : String,
        password : String){
        this.username = username;
        this.name = name
        this.email = email
        this.cpf = cpf
        this.celNumber = celNumber
        this.username = username
        this.password = password
    }

    constructor(){
        this.username = ""
        this.name = ""
        this.email = ""
        this.cpf = ""
        this.celNumber = ""
        this.username = ""
        this.password = ""
    }

}