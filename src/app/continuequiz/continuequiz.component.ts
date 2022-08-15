import { Component, OnInit } from '@angular/core';
import { ContinuequizModel } from 'src/models/continuequiz.model';
import { QuestionService } from 'src/services/question.service';

@Component({
  selector: 'app-continuequiz',
  templateUrl: './continuequiz.component.html',
  styleUrls: ['./continuequiz.component.css']
})
export class ContinuequizComponent implements OnInit {

  quiz : ContinuequizModel ={userName:""}

  ngOnInit(): void {
  }
  go():void{
    window.location.href = "./question?userName="+this.quiz.userName;
  }

}
