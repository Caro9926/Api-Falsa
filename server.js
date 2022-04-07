const {faker} = require('@faker-js/faker');
const express = require('express');

class User{
    constructor(){
        this._id = faker.datatype.uuid;
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.email = faker.internet.email();
        this.phoneNumber = faker.phone.phoneNumber();
        this.password = faker.internet.password();
    }
}

class Company{
    constructor(){
        this._id=faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = {
            street:faker.address.streetName(),
            city:faker.address.cityName(),
            state:faker.address.state(),
            country:faker.address.country(),
            zipCode:faker.address.zipCode()
        }
    }
}

const app = express();

app.get("/api/user/company", (request,response) =>{
  return response.status(200).json({usuario: new User(), empresa: new Company()});
})

app.get("/api/users/new",(request,response) =>{
    return response.status(200).json(new User());
})

app.get("/api/companies/new", (request,response) =>{
    return response.status(200).json(new Company());
})


app.listen(8080, () =>{
    console.log("Server initialized");
})
