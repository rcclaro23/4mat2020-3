import { ConsultaService } from '../consulta.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-consulta-list',
  templateUrl: './consulta-list.component.html',
  styleUrls: ['./consulta-list.component.scss']
})
export class ConsultaListComponent implements OnInit {

    consultas: any = [] // vetor vazio

    displayedColumns : string[] = ['nome', 'carga_horaria', 'nivel', 'valor_consulta',
    'editar','excluir']
    
  constructor(
      private consultaSrv : ConsultaService,
      private snackBar : MatSnackBar
      ) { }

  async ngOnInit() {
      this.consultas = await this.consultaSrv.listar()
      console.log(this.consultas)
  }
    async excluir(id: string){
    if(confirm('Deseja realmente excluir este ítem?')){
    try{
     // 1) Efetuar a exclusão 
     await this.consultaSrv.excluir(id)
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

