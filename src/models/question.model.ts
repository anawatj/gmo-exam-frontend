import { Answer } from "./answer.model"

export interface QuestionModel {
    id:string 
    questionDesc:string
    answers:Answer[]
}