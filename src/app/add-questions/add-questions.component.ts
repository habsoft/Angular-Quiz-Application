import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '../app.service';
import { QuestionClass } from '../question-class';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {

  questionObj = new QuestionClass();
  @ViewChild('questionForm') questionForm: any;
  allQuestions: any;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private service: AppService
  ) { }

  ngOnInit(): void {
    this.allQuestions = this.service.allQuestions;

  }

  submitAddQuestion() {
    let quesTemp = JSON.parse(JSON.stringify(this.questionObj));
    quesTemp["id"] = this.allQuestions.length + 1;
    this.service.addQuestions(quesTemp);
    this.questionForm.reset();
    this.toastr.success("Question Added Successfully!!");
  }

  gotoMain() {
    this.router.navigate(['main']);
  }

}
