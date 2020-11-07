import { Injectable } from '@angular/core';
import { CursoService } from './curso.service';

@Injectable({
  providedIn: 'root'
})
export class CursoListService {

  constructor(private cursoSrv : CursoService) { }
  ngOnInit(): void{

  }
}
