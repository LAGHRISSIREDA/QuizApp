import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    carList = ["Audi","Ford","Mercedes","Dacia"];

    ceoList =[
        {
            id      :235346,
            company :"Google",
            name    : "Name 0",
            title   :"CEO - Google"
        },
        {
             id      :235466,
             company :"Nvidia",
             name    : "Name 1",
             title   :"CEO - Nvidia"
        },
        {
             id      :235566,
             company :"Apple",
             name    : "Name 2",
             title   :"CEO - Apple"
        },
        {
             id      :235636,
             company :"Microsoft",
             name    : "Name 3",
             title   :"CEO - Microsoft"
        }
        
    ]
}