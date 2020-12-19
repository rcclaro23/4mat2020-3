import { MatSnackBar } from '@angular/material/snack-bar';
import { EspecieService } from './../especie.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-especie-form',
  templateUrl: './especie-form.component.html',
  styleUrls: ['./especie-form.component.scss']
})
export class EspecieFormComponent implements OnInit {

  title : string = 'Novo especie'

  especie : any = {} // Objeto vazio, nome da entidade no SINGULAR

  

  constructor(
    private especieSrv : EspecieService,
    private snackBar : MatSnackBar,
    private location : Location,
    private actRoute : ActivatedRoute
  ) { }

  async ngOnInit() {
    // Verificando se existe id na rota que trouxe ao formulário
    if(this.actRoute.snapshot.params['id']) {
      try {
        // 1) Trazer o registro do back-end para edição
        this.especie = await this.especieSrv.obterUm(this.actRoute.snapshot.params['id'])
        // 2) Mudar o título da página
        this.title = 'Editando especie'
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
        if(this.especie._id) {
          // _id existe, esse registro já foi salvo anteriormente
          // no BD e é caso de atualização
          await this.especieSrv.atualizar(this.especie)
        }
        else {
          await this.especieSrv.novo(this.especie)
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