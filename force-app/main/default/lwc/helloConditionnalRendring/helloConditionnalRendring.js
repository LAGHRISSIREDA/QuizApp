import { LightningElement } from 'lwc';

export default class HelloConditionnalRendring extends LightningElement {
    isVisible = false;

    handleClick(){
        this.isVisible = !this.isVisible;
    }

    get getLabel(){
        return this.isVisible? 'Hide Data' : 'Show Data';
    }
}