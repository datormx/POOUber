class Account
{
    constructor(name, document)
    {
        this.id;
        this.name = name;
        this.document = document;
        this.email;
        this.password;
    }   
    
    printUserData()
    {
        console.log("Nombre usuario: " + this.name);
        console.log("Identificación usuario: " + this.document);
    }
}



    