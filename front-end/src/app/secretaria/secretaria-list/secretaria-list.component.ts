import { SecretariaService } from '../secretaria.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-secretaria-list',
  templateUrl: './secretaria-list.component.html',
  styleUrls: ['./secretaria-list.component.scss']
})
export class SecretariaListComponent implements OnInit {

    secretarias: any = [] // vetor vazio

    displayedColumns : string[] = ['nome', 'cpf', 'telefone', 'email',
    'editar','excluir']
    
  constructor(
      private secretariaSrv : SecretariaService,
      private snackBar : MatSnackBar
      ) { }

  async ngOnInit() {
      this.secretarias = await this.secretariaSrv.listar()
      console.log(this.secretarias)
  }
    async excluir(id: string){
    if(confirm('Deseja realmente excluir este ítem?')){
    try{
     // 1) Efetuar a exclusão 
     await this.secretariaSrv.excluir(id)
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