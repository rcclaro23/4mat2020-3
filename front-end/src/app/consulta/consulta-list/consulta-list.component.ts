import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-consulta-list',
  templateUrl: './consulta-list.component.html',
  styleUrls: ['./consulta-list.component.scss']
})
export class ConsultaListComponent implements OnInit {

  consultas : any = []  // Vetor vazio

  displayedColumns : string[] = ['data', 'hora', 'valor', 'veterinario', 'animal',
    'editar', 'excluir']
  
  constructor(
    private consultaSrv : ConsultaService,
    private snackBar : MatSnackBar
  ) { }

  async ngOnInit() {
    this.consultas = await this.consultaSrv.listar()
    console.log(this.consultas)
  }

  async excluir(id : string) {
    if(confirm('Deseja realmente excluir este item?')) {
      try {
        // 1) Efetuar a exclusão
        await this.consultaSrv.excluir(id)
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
