
import { RacaService } from '../raca.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-raca-list',
  templateUrl: './raca-list.component.html',
  styleUrls: ['./raca-list.component.scss']
})
export class RacaListComponent implements OnInit {

    racas: any = [] // vetor vazio

    displayedColumns : string[] = ['nome_raca', 'especie',
    'editar','excluir']
    
  constructor(
      private racaSrv : RacaService,
      private snackBar : MatSnackBar
      ) { }

  async ngOnInit() {
      this.racas = await this.racaSrv.listar()
      console.log(this.racas)
  }
    async excluir(id: string){
    if(confirm('Deseja realmente excluir este ítem?')){
    try{
     // 1) Efetuar a exclusão 
     await this.racaSrv.excluir(id)
     // 2) Atualizar os dados da tabela
     this.ngOnInit()
     // 3)Dar um feed back de sucesso para o usuario 
     this.snackBar.open('Item excluído com sucesso.', 'Entendi',{
         duration: 5000 // 5 segundos
     })
    }
    catch(erro){
        console.error(erro)
    //  4) Dar um feedback de erro para o usuario
    this.snackBar.open('Erro: não foi possível excluir este ítem.', 'Que pena', {
        duration: 5000 // 5 segundos   
    })



    }
}
}
}
