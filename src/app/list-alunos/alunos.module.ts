import { NgModule } from "@angular/core";
import { ListAlunosComponent } from "./list/list-alunos.component";
import { InsertAlunoComponent } from './insert/insert-aluno.component'
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [ListAlunosComponent, InsertAlunoComponent, HomeComponent],
    exports: [ListAlunosComponent, InsertAlunoComponent],
    imports: [CommonModule, FormsModule]
})

export class AlunosModule{
}