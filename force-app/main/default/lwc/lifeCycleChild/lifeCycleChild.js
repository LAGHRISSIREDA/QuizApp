import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {

   
    //constrcutor
    constructor(){
        super()
        console.log('Child Constructor Called');
    }

    //connectedCallback
    connectedCallback(){
        console.log('Child connectedCallback Called');
        window.addEventListener('click',this.handleClick)
    }

    //rendredCallBack
    renderedCallback(){
        console.log('Child renderedCallback Called');
    }

    disconnectedCallback(){
        console.log('DisconnectedCall Back is Called CHILD COMPONENT')
        //alert('DisconnectedCallBack is Called')
        window.removeEventListener('click',this.handleClick);
    }

    handleClick(){
        alert('handleClick function is called')
    }
    