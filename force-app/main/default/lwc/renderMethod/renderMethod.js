import { LightningElement } from 'lwc';
import signingTemplate from './signingTemplate.html'
import signupTemplate from './signupTemplate.html'
import renderTemplate from './renderMethod.html'

export default class RenderMethod extends LightningElement {

    selctedBtn ='';
    render(){
        return this.selctedBtn === 'Signup'? signupTemplate :
                this.selctedBtn === 'Signin'? signingTemplate:
                renderTemplate;
    }

    handleClick(event){
        this.selctedBtn = event.target.label;
    }

    returnButton(){
        this.selctedBtn=''
    }

    handleSubmit(){
        console.log('Submit Successfully');
    }

    handleSignin(){
        console.log('Signin Successfully');
    }
}