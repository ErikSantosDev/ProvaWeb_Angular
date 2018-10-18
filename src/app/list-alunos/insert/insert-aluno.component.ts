import { Component, OnInit } from '@angular/core';
import { Aluno } from '../Class/Aluno';
import { AlunosService } from '../services/alunos.service';
import { HttpClient } from '@angular/common/http';

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
    }

}
