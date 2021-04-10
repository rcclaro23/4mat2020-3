import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DentistaService {

    private server = environment.apiServer
    private apiUri = this.server + 'dentista'
    
    constructor(private http : HttpClient) { }

    listar(){
        return this.http.get(this.server + 'dentista').toPromise()
    }

    excluir(id : string) {
        return this.http.request('DELETE', this.server + 'dentista', 
        {body: {_id: id}}).toPromise()
    }

    novo(body : any) {
        return this.http.post(this.server, body).toPromise()
    }

    obterUm(id: string) {
    return this.http.get(this.server + '/' + id).toPromise()
  }

    atualizar(body : any) {
    return this.http.put(this.server, body).toPromise()
  }

}
