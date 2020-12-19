import { MatSnackBar } from '@angular/material/snack-bar';
import { SecretariaService } from './../secretaria.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-secretaria-form',
  templateUrl: './secretaria-form.component.html',
  styleUrls: ['./secretaria-form.component.scss']
})
export class SecretariaFormComponent implements OnInit {

  title : string = 'Novo secretaria'

  secretaria : any = {} // Objeto vazio, nome da entidade no SINGULAR

  

  constructor(
    private secretariaSrv : SecretariaService,
    private snackBar : MatSnackBar,
    private location : Location,
    private actRoute : ActivatedRoute
  ) { }

  async ngOnInit() {
    // Verificando se existe id na rota que trouxe ao formulário
    if(this.actRoute.snapshot.params['id']) {
      try {
        // 1) Trazer o registro do back-end para edição
        this.secretaria = await this.secretariaSrv.obterUm(this.actRoute.snapshot.params['id'])
        // 2) Mudar o título da página
        this.title = 'Editando secretaria'
      }
      catch(erro) {
        console.log(erro)
        this.snackBar.open('ERRO: não foi possível carregar os dados para edição.',
          'Que pena!', { duration: 5000 })
      }
    }
  }

  async salvar(form : NgForm) {
    try {
      if(form.valid) {
        // 1) Enviar os dados para o back-end para serem salvos
        if(this.secretaria._id) {
          // _id existe, esse registro já foi salvo anteriormente
          // no BD e é caso de atualização
          await this.secretariaSrv.atualizar(this.secretaria)
        }
        else {
          await this.secretariaSrv.novo(this.secretaria)
        }
        // 2) Dar um feedback (mensagem) para o usuário
        this.snackBar.open('Dados salvos com sucesso.', 'Entendi',
          { duration: 5000 })
        // 3) Voltar para a tela de listagem
        this.location.back()
      }
    }
    catch(erro) {
      console.log(erro)
      this.snackBar.open('ERRO: não foi possível salvar os dados.', 'Que pena!',
        { duration: 5000 })
    }
  }

  voltar(form : NgForm) {
    let result = true
    // form.dirty = formulário "sujo", não salvo (via código)
    // form.touched = o conteúdo de algum campo foi alterado (via usuário)
    if(form.dirty && form.touched) {
      result = confirm('Há dados não salvos. Deseja realmente voltar?')
    }
    // Retorna à página anterior se resposta foi positiva ou se o formulário
    // estiver "limpo"
    if(result) this.location.back()
  }

}