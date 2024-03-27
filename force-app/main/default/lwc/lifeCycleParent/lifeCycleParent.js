import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    name ='';
    checkVisibility = true;
    //constrcutor
    constructor(){
        super()
        console.log('Parent Constructor Called');
    }

    //connectedCallback
    connectedCallback(){
        console.log('Parent connectedCallback Called');
    }

    //rendredCallBack
    renderedCallback(){
        console.log('Parent renderedCallback Called');
    }

    clickHandle(event){

       this.checkVisibility = !this.checkVisibility;

    }

    get checkV(){
        return this.checkVisibility?'Show':'Hide';
    }

    disconnectedCallback(){
        console.log('Disconnected CallBack From Parent is Called')
    }

    errorCallback(){
        
    }
    

     

    
}