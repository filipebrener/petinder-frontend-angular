import { ClientService } from './../services/client.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidatorsService } from '../services/form-validators.service'
import { provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [
    provideNgxMask()
  ]
})
export class SignUpComponent{

  protected form : FormGroup
  private clientService : ClientService

  protected isToShowPassword: boolean
  protected isToShowConfirmationPassword: boolean


  protected celNumberMask : String

  constructor(
    private formBuilder : FormBuilder,
    private _clientService : ClientService){

    this.celNumberMask = '(00) 0000-0000'

    this.isToShowConfirmationPassword = this.isToShowPassword = false

    this.clientService = _clientService

    this.form = formBuilder.group({
      name:[null, Validators.required],
      username:[null, Validators.required],
      password:[null, Validators.required],
      cpf:[null, Validators.required],
      celNumber:[null, Validators.compose([
        Validators.required 
      ])],
      email:[null, Validators.compose([
        Validators.required, Validators.email 
      ])],
      confirmationEmail: [null, Validators.compose([
        Validators.required, FormValidatorsService.equalsTo('email')
      ])],
      confirmationPassword: [null,Validators.compose([
        Validators.required, FormValidatorsService.equalsTo('password')
      ])]
    })

  }

  onSubmit(): void {
    console.log(this.form.value)
    // this.clientService.save(this.form.value)
  }

}
