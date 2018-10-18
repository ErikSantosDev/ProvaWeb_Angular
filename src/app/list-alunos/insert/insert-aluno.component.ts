import { Component, OnInit } from '@angular/core';
import { Aluno } from '../Class/Aluno';
import { AlunosService } from '../services/alunos.service';
import { HttpClient } from '@angular/common/http';
import { ListAlunosComponent } from '../list/list-alunos.component';
import { AppRoutingModule } from 'src/app/app.rounting.module';
import { componentRefresh } from '@angular/core/src/render3/instructions';
import { Route, RouterModule } from "@angular/router";

@Component({
  selector: 'app-insert-aluno',
  templateUrl: './insert-aluno.component.html',
  styleUrls: ['./insert-aluno.component.css']
})
export class InsertAlunoComponent  {
  http: HttpClient;
  
  constructor(private alunosService: AlunosService){}
    
  onSubmit(aluno){
       this.alunosService.gravar(aluno.value)
       alert('Aluno cadastrado com sucesso');
    }

}
