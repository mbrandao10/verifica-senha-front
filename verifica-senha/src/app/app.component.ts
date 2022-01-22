import { Component, OnInit } from '@angular/core';
import { validaSenhaService } from './service/valida-senha.sevice';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'verifica-senha';
  senha: string = '';
  messagemSucesso: string = 'Senha validada com sucesso!';
  messagemErro: string = 'Desculpe, servidor indisponível.';
  senhaErro: string = 'A senha não compre os requisitos, por favor tente outra senha.';

  

  constructor( 
    private readonly validaSenhaService: validaSenhaService,
    public dialog: MatDialog
     ) {};

  ngOnInit() {
    this.senha = '';
  };

  validaSenha() {
    var senha = this.senha;
    var repeat = 0;

    var regex = /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[a-z]){1})(?=(?:.*?[0-9]){1})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/; 

    for (var m = 0; m < this.senha.length; m++) {

      for (var p = m+1; p < this.senha.length; p++) {
        
        if (this.senha[m] === this.senha[p]){

          repeat++;
          break;

        }

      }

    }
    console.log(repeat)
    console.log(regex.exec(senha))
    if((this.senha.length < 9) || (!regex.exec(senha)) || (repeat > 0) )
    {
        this.openDialog('ATENÇÃO!', this.senhaErro, 2);

        return;
    } else{

      this.validaSenhaService.postSenha(this.senha).subscribe(()=> {
      this.ngOnInit();
      this.openDialog('Senha válida', this.messagemSucesso, 1);
      
      }, ()=>{   
          this.openDialog('Erro!', this.messagemErro, 2);
        }
      )
    }
  }

  requisitos() {
    alert('- Nove ou mais caracteres; \n - Ao menos 1 dígito; \n -Ao menos 1 letra minúscula; \n -Ao menos 1 letra maiúscula; \n - Ao menos 1 caractere especial:  !@#$%^&*()-+; \n - Não possuir caracteres repetidos dentro do conjunto');
  }

  openDialog(title: string, message: string, input: number): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      data: { title: title, message: message, input: input }
    });
    dialogRef.afterClosed().subscribe(() => { });
  }



}
