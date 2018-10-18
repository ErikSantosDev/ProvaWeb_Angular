import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Aluno } from '../Class/Aluno';



@Injectable({providedIn: 'root'})
export class AlunosService {
  constructor (private http: HttpClient) {
  }
        listar() {
          return this.http.get<Aluno[]>('http://paw.ic.ufmt.br/jivago/alunos-api/public/index.php/alunos');
        }

        gravar(aluno){
          this.http.post('http://paw.ic.ufmt.br/jivago/alunos-api/public/index.php/alunos', aluno)
          .subscribe(dados => console.log(dados))
        }
}   

