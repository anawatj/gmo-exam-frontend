import { Component, OnInit } from '@angular/core';
import { ContinuequizModel } from 'src/models/continuequiz.model';
import { QuestionModel } from 'src/models/question.model';
import { UserQuestionModel } from 'src/models/userQuestion.model';
import { QuestionService } from 'src/services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(private questionService:QuestionService) { }

  questions :QuestionModel[]=[];
  quiz :ContinuequizModel ={userName:""}
  userQuestions :UserQuestionModel[]=[]

  ngOnInit():void {
     this.load();
  }
  async load(){
    var queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const userName = urlParams.get('userName')
    this.quiz.userName=userName!;
    await this.getQuestion();
    //await this.loadQuestion();
    
    this.questions.forEach(question=>{
      question.answers.filter(answer=>this.userQuestions.map(userQuestion=>userQuestion.userQuestionAnswers).filter(aa=>aa.filter(a=>a.answerId==answer.id).length>0).length>0).map(answer=>{
        answer.selected=true;
      });
    })
  }
 
  async getQuestion(){
    this.questionService.getQuestion().subscribe(resp=>{
      this.questions=resp.data;
      this.loadQuestion();
    });
  }
  async loadQuestion(){
    this.questionService.loadSaveQuiz(this.quiz).subscribe(resp=>{
      if(resp.status!="OK" || resp.data==undefined || resp.data.length==0){
        this.userQuestions = this.questions.map(question=>{
          return {id:"",userId:"",userName:this.quiz.userName,questionId:question.id,userQuestionAnswers:[],answers:[]}
        });
      }
      if(resp.data && !resp.data.answers){
        resp.data.answers=[];
      }
      if(resp.data){
        this.userQuestions = resp.data;
      }
      
    })
  }

  radioChange(questionId:string,answerId:string,evt:any){
    var target = evt.target;
    if(target.checked){
       
      
        this.questions.filter(question=>question.id==questionId).map(question=>{
          this.userQuestions.filter(userQuestion=>userQuestion.questionId==questionId).map(userQuestion=>{
            userQuestion.answers = question.answers.filter(answer=>answer.id==answerId).map(answer=>{
              return {id:"",answerId:answer.id};
            });
          });
        });
    }
  }
  save(){
    
    this.questionService.saveQuiz(this.userQuestions).subscribe(resp=>{
      window.location.href="./question?userName="+this.quiz.userName;
    });
  }
  submit(){
    this.questionService.submitQuiz(this.userQuestions).subscribe(resp=>{
      if(resp.data){
        window.location.href="./summary?userName="+this.quiz.userName;
      }else{
        alert(resp.error);
      }
     
    })
  }

}
