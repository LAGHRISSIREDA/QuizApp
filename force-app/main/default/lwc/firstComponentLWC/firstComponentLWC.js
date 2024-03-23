import { LightningElement } from 'lwc';

export default class FirstComponentLWC extends LightningElement {
    name //undefined
    age = 30;
    fullName = `salesforce Morocco`;
    showData = false;
    details = {
        name : `reda`,
        place : `Safi`
    }
    userList = [`A`,`B`,`C`];
    users = [`Reda`,`Ahmed`,`Salim`];
    num1 = 10;
    num2 = 20;
    title = `Àura`;

    //getters
    get getFirstUser(){
        return this.users[0]
    }

    get sumOfTwoNumber(){
        return this.num1+this.num2
    }
    //methods
    getName(){
        //perfom my logic

    }
    changeHandler(event){
        this.title = event.target.value;
    }


}