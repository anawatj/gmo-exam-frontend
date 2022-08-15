import { UserQuestionAnswerModel } from "./userQuestionAnswer.model"

export interface UserQuestionModel {
    id : string 
    questionId : string 
    userId:string 
    userName:string 
    userQuestionAnswers:UserQuestionAnswerModel[]
    answers:UserQuestionAnswerModel[]
}