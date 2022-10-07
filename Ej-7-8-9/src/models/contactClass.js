export class Contact {
    name = '';
    surname = '';
    email = '';
    conected = true;

    constructor(name, surname, email, conected){
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.conected = conected;
    }
}