import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }


  allQuestions: any = [{
    "id": 1,
    "question": "What is the capital of Belgium?",
    "a": "Vienna",
    "b": "Berlin",
    "c": "Brussels",
    "d": "Prague",
    "answer": "c"
  },
  {
    "id": 2,
    "question": "What is the capital of Australia?",
    "a": "Vienna",
    "b": "Canberra",
    "c": "Brussels",
    "d": "Prague",
    "answer": "b"
  },
  {
    "id": 3,
    "question": "What is the capital of Bulgaria?",
    "a": "Vienna",
    "b": "Sofia",
    "c": "Brussels",
    "d": "Prague",
    "answer": "b"
  }
  ];

  addQuestions(quesTemp: any){
    this.allQuestions.push(quesTemp);
    console.log(this.allQuestions);
  }
}
