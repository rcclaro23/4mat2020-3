import { Component, OnInit } from '@angular/core';
import { DentistaService } from '../dentista.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dentista-list',
  templateUrl: './dentista-list.component.html',
  styleUrls: ['./dentista-list.component.scss']
})
export class DentistaListComponent implements OnInit {

  dentista : any = []  // Vetor vazio

  displayedColumns : string[] = ['nome', 'formacao', 'cpf', "endereco", "telefone", "email", "secretaria", 'editar', 'excluir']
  
  constructor(
    private dentistaSrv : DentistaService,
    private snackBar : MatSnackBar
  ) { }

  async ngOnInit() {
    this.dentista = await this.dentistaSrv.listar()
    console.log(this.dentista)
  }

  async excluir(id : string) {
    if(confirm('Deseja realmente excluir este item?')) {
      try {
        // 1) Efetuar a exclusão
        await this.dentistaSrv.excluir(id)
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
