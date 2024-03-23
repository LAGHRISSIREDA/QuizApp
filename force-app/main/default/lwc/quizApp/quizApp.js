import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected = {}
    correctAnswers = 0;
    isSubmitted = false;

    myQuestions = [
        {
            id :'Question1',
            question : 'Which one of the following is not a template ?',
            answers : {
                a : 'for:each',
                b : 'iterator',
                c : 'map loop'
            },
            correctAnswer : 'c'
        },
        {
            id :'Question2',
            question : 'Which of the file is invalid in LWC folder ?',
            answers : {
                a : '.svg',
                b : '.apex',
                c : '.js'
            },
            correctAnswer : 'b'
        },
        {
            id :'Question3',
            question : 'Which one of the following is not a directive ?',
            answers : {
                a : 'for:each',
                b : 'if:true',
                c : '@track'
            },
            correctAnswer : 'c'
        }
    ];

    get allNotSelected(){
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    }

    get isScoredFul(){
        return `slds-m-bottom_medium slds-text-heading_large ${this.myQuestions.length === this.correctAnswers?'slds-text-color_success':'slds-text-color_error'}`
    }


    changeHandler(event){
        //console.log('Name:', event.target.name);
       //console.log('Value:', event.target.value);
        const {name,value} = event.target;
        console.log(`Name is : ${name} and Value is : ${value}`);
        this.selected = {...this.selected,[name]:value}
        console.log('Selected Items : ',this.selected)
       
    }

    submitHandler(event){

        event.preventDefault();
        let correct = this.myQuestions.filter(item => this.selected[item.id] === item.correctAnswer)
        console.log('correct:', correct);
        this.correctAnswers = correct.length;
        console.log('Correct Answers :', this.correctAnswers);
        this.isSubmitted = true;

    }

    resetHandler(){
        this.selected = {};
        this.correctAnswers = 0;
        this.isSubmitted = false
    }
    
    

    
}