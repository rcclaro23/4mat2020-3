import { Component, OnInit } from '@angular/core';
import { VeterinarioService } from '../veterinario.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-veterinario-list',
  templateUrl: './veterinario-list.component.html',
  styleUrls: ['./veterinario-list.component.scss']
})
export class VeterinarioListComponent implements OnInit {

  veterinarios : any = []  // Vetor vazio

  displayedColumns : string[] = ['nome', 'formacao', 'cpf', "endereco", "telefone", "email", "secretaria", 'editar', 'excluir']
  
  constructor(
    private veterinarioSrv : VeterinarioService,
    private snackBar : MatSnackBar
  ) { }

  async ngOnInit() {
    this.veterinarios = await this.veterinarioSrv.listar()
    console.log(this.veterinarios)
  }

  async excluir(id : string) {
    if(confirm('Deseja realmente excluir este item?')) {
      try {
        // 1) Efetuar a exclusão
        await this.veterinarioSrv.excluir(id)
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
