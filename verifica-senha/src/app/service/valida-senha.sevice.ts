import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable ({
    providedIn: 'root'
})
export class validaSenhaService {

    public apiURL = environment.apiUrl;
    public headers = new HttpHeaders ({ 'content-Type': 'application/json' });

    constructor( private readonly http: HttpClient){ }

    postSenha(senha: string){
        var payload = JSON.stringify({"senha": senha})
        return this.http.post(`${this.apiURL}/auth/newpass`, payload, {headers: this.headers});
    }
}