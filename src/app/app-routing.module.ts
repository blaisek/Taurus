import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IssueTokenComponent } from './issue-token/issue-token.component';
import { TokenListComponent } from './token-list/token-list.component';

const routes: Routes = [
{path: '', component: TokenListComponent},
{path: 'tokenList', component: TokenListComponent},
{path: 'issueToken', component: IssueTokenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
