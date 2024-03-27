import { LightningElement } from 'lwc';
import pageNotIntrouvable from './pageNotIntrouvable.html';
import category from './category.html'
import demoComponent from './demoComponent.html'

export default class DemoComponent extends LightningElement {

    selectedBTN = '';

    render(){
        return this.selectedBTN === 'PageIntrouvable' ? pageNotIntrouvable :
                this.selectedBTN === 'Category'? category: demoComponent;
                  
    }

    handleClick(event){
        this.selectedBTN = event.target.label;
    }


}