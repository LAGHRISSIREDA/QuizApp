import { LightningElement } from 'lwc';

export default class ShadowDomStyling extends LightningElement {
    isLoaded = false;
    renderedCallback(){
        if(this.isLoaded) return 
        const style = document.createElement('style');
        style.innerText = `c-shadow-dom-styling .slds-button{
            background: red;
            font-size: 24px;
            font-weight: 200;
            padding: 2px 26px;
            border-radius: 30px;
            color: white;
            box-shadow: gray 1px 1px 3px;
            border: none;
        }` 
        this.template.querySelector('lightning-button').appendChild(style);
        this.isLoaded = true;
    }
}