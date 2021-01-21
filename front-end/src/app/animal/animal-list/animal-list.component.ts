import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss']
})
export class AnimalListComponent implements OnInit {

  animais : any = []  // Vetor vazio

  displayedColumns : string[] = ['nome', 'data', 'cliente', 'raca',
    'editar', 'excluir']
  
  constructor(
    private animalSrv : AnimalService,
    private snackBar : MatSnackBar
  ) { }

  async ngOnInit() {
    this.animais = await this.animalSrv.listar()
    console.log(this.animais)
  }

  async excluir(id : string) {
    if(confirm('Deseja realmente excluir este item?')) {
      try {
        // 1) Efetuar a exclusão
        await this.animalSrv.excluir(id)
        // 2) Atualizar os dados da tabela
        this.ngOnInit()
        // 3) Dar um feedback de sucesso para o usuário
        this.snackBar.open('Item excluído com sucesso.', 'Entendi', {
          duration: 5000 // 5 segundos
        })
      }
      catch(erro) {
        console.error(erro)
        // 4) Dar um feedback de erro para o usuário
        this.snackBar.open('ERRO: não foi possível excluir este item.', 'Que pena!', {
          duration: 5000 // 5 segundos
        })
      }
    }
  }

}