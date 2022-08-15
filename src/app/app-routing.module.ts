import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContinuequizComponent } from './continuequiz/continuequiz.component';
import { LandingComponent } from './landing/landing.component';
import { QuestionComponent } from './question/question.component';
import { RegisterComponent } from './register/register.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'quiz',component:ContinuequizComponent},
  { path: 'question', component: QuestionComponent},
  { path: 'summary',component: SummaryComponent},
  { path: '',   redirectTo: '/landing', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
