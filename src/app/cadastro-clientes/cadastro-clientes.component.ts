import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppHttpService } from '../service/app-http.service';
@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {

  constructor(private router: Router, private api: AppHttpService , private formBuilder: FormBuilder) { }
   registerForm: FormGroup;
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        'name' : [null, Validators.required ],
        'email': [null, Validators.required ],
        'phone': [null, Validators.required ],
        'cpf': [null, Validators.required ],
        'andress': [null, Validators.required ]
    });
  }

  onFormSubmit() {
    console.log(this.registerForm.value);

     this
    .api
    .insert(this.registerForm.value)
    .subscribe(data => {
      console.log(data);
    });
  }

}
