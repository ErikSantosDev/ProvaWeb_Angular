import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { InsertAlunoComponent } from "./list-alunos/insert/insert-aluno.component";
import { ListAlunosComponent } from "./list-alunos/list/list-alunos.component";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { HomeComponent } from "./list-alunos/home/home.component";

const routes: Routes =[
    {path: 'alunos/new', component : InsertAlunoComponent},
    {path: 'alunos', component : ListAlunosComponent},
    {path: '', component : HomeComponent},
    {path: '**', component : NotFoundComponent}
];

@NgModule({

    imports : [RouterModule.forRoot(routes)],
    exports: [ RouterModule ]

})

export class AppRoutingModule{
}