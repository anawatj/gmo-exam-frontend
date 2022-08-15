import { Component, OnInit } from '@angular/core';
import { ContinuequizModel } from 'src/models/continuequiz.model';
import { SummaryModel } from 'src/models/summary.model';
import { QuestionService } from 'src/services/question.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(private questionService:QuestionService) { }

  quiz :ContinuequizModel={userName:""}
  summary :SummaryModel={userName:"",rank:0,score:0}

  ngOnInit(): void {
    this.loadSummary();
  }

  loadSummary(){
    var queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const userName = urlParams.get('userName')
    console.log(userName)
    this.quiz.userName=userName!;
    console.log(this.quiz.userName);
    this.questionService.summaryQuiz(this.quiz).subscribe(resp=>{
      this.summary = resp.data;
    })
  }

}
