import { Component, OnInit } from '@angular/core';
import { NgModule } from "@angular/core";
import { Aluno } from '../Class/Aluno';
import { AlunosService } from '../services/alunos.service';

@Component({
  selector: 'app-list-alunos',
  templateUrl: './list-alunos.component.html',
  styleUrls: ['./list-alunos.component.css']
})
export class ListAlunosComponent {
   alunos: Aluno[];

  constructor (AlunosService : AlunosService){
    AlunosService.listar()
    .subscribe(alunos => {
              this.alunos = alunos;
              console.log(this.alunos);
            });
  }

  }


