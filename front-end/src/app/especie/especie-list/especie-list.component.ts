
import { EspecieService } from '../especie.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-especie-list',
  templateUrl: './especie-list.component.html',
  styleUrls: ['./especie-list.component.scss']
})
export class EspecieListComponent implements OnInit {

    especies: any = [] // vetor vazio

    displayedColumns : string[] = ['id_especie',
    'editar','excluir']
    
  constructor(
      private especieSrv : EspecieService,
      private snackBar : MatSnackBar
      ) { }

  async ngOnInit() {
      this.especies = await this.especieSrv.listar()
      console.log(this.especies)
  }
    async excluir(id: string){
    if(confirm('Deseja realmente excluir este ítem?')){
    try{
     // 1) Efetuar a exclusão 
     await this.especieSrv.excluir(id)
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
