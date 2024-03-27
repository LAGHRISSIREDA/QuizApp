import { LightningElement } from 'lwc';

export default class P2cParentComponent extends LightningElement {

    parentMessage ='';

    handleMessage(event){
        this.parentMessage = event.target.value
    }
   
}