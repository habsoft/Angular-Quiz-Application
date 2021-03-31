import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { AppService } from '../app.service';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit {

  @ViewChild('submitModal') submitModal: ModalDirective;
  @ViewChild('answerModal') answerModal: ModalDirective;
  totalAnswered: number = 0;
  rightAnswer: number;
  allQuestions: any;
  constructor(
    private service: AppService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.allQuestions = this.service.allQuestions;
  }

  homePage() {
    this.router.navigate(['main']);
  }

  submitTest() {
    this.rightAnswer = 0;
    this.totalAnswered = 0;
    for (let i = 0; i < this.allQuestions.length; i++) {
      if ("selected" in this.allQuestions[i] && (this.allQuestions[i]["selected"] != null)) {
        this.totalAnswered++;
        if (this.allQuestions[i]["selected"] == this.allQuestions[i]["answer"]) {
          this.rightAnswer++;
        }
      }

    }
    this.submitModal.show();
  }

  checkAnswers() {
    this.submitModal.hide();
    this.answerModal.show();
  }



}
