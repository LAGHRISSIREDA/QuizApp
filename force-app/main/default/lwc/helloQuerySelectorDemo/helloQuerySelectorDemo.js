import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {

    userNames = [
        "Reda",
        "Ahmed",
        "Abdo",
        "Yakoub",
        "Yasser",
        "Younes",
        "Mohammed",
       
    ]

    fetchDetailHandler(){
       const elem =  this.template.querySelector('h1');
       const userNames = this.template.querySelectorAll('.name');
       console.log('elem:', elem.innerText);
       elem.style.border='1px solid red'
       Array.from(userNames).forEach(item =>{
        console.log('item.innerText:', item.innerText);
        item.setAttribute('title',item.innerText)
       });

       const childElem = this.template.querySelector('.child');
       childElem.innerHTML = '<p> Hey I am new Content</p>'
    }
}