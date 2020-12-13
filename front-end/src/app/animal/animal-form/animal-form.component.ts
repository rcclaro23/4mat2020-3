import { ConsultaFormComponent } from './../../consulta/consulta-form/consulta-form.component';
import { ClienteService } from './../../cliente/cliente.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from 'src/app/animal/animal.service';
import { RacaService } from 'src/app/raca/raca.service';
import { ConsultaService } from 'src/app/consulta/consulta.service';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.scss']
})
export class AnimalFormComponent implements OnInit {

  title : string = 'Novo animal'

  animal : any = {} // Objeto vazio, nome da entidade no SINGULAR

  // Variáveis para armazenas as listagens das entidades relacionadas
  clientes : any = []   // Nome no plural, vetor vazio
  consultas : any = []
  racas : any = []

  constructor(
    private animalSrv : AnimalService,
    private clienteSrv : ClienteService,
    private consultaSrv : ConsultaService,
    private racaSrv: RacaService,
    private snackBar : MatSnackBar,
    private location : Location,
    private actRoute : ActivatedRoute
  ) { }

  async ngOnInit() {
    // Verificando se existe id na rota que trouxe ao formulário
    if(this.actRoute.snapshot.params['id']) {
      try {
        // 1) Trazer o registro do back-end para edição
        this.animal = await this.animalSrv.obterUm(this.actRoute.snapshot.params['id'])
        // 2) Mudar o título da página
        this.title = 'Editando turma'
      }
      catch(erro) {
        console.log(erro)
        this.snackBar.open('ERRO: não foi possível carregar os dados para edição.',
          'Que pena!', { duration: 5000 })
      }
    }

    // Carregar as listagens das entidades relacionadas
    try {
      this.clientes = await this.clienteSrv.listar()
      this.consultas = await this.consultaSrv.listar()
      this.racas = await this.racaSrv.listar()
    }
    catch(erro) {
      console.log(erro)
      this.snackBar.open('ERRO: não foi possível carregar todos os dados do formulário.',
        'Que pena!', { duration: 5000 })
    }
  }

  async salvar(form : NgForm) {
    try {
      if(form.valid) {
        // 1) Enviar os dados para o back-end para serem salvos
        if(this.animal._id) {
          // _id existe, esse registro já foi salvo anteriormente
          // no BD e é caso de atualização
          await this.animalSrv.atualizar(this.animal)
        }
        else {
          await this.animalSrv.novo(this.animal)
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
