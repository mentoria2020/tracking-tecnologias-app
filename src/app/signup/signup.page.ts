import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'track-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  signupForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router:Router) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      surname: ['', []],
      password: ['', Validators.compose([Validators.required])],
      password2: ['', [Validators.required]],
      city: [''],
      profession: ['']
    }, { validators: SignupPage.validarPassword });
  }


  voltar(event) {
    //event.preventDefault();
    this.router.navigateByUrl('/login');
  }

  // validarPassword(fc: FormControl) {
  //   let pwd1 = this.password;
  //   let pwd2 = this.password2;

  //   let rv: { [error: string]: any } = {};
  //   if ((pwd1.touched || pwd2.touched) && pwd1.value !== pwd2.value) {
  //      return { passwordNotMatch: true }
  //   }
  //   return rv;

  // }

  static validarPassword(cg: FormGroup) {
    let pwd1 = cg.get('password');
    let pwd2 = cg.get('password2');

    let rv: { [error: string]: any } = {};
    if ((pwd1.touched || pwd2.touched) && pwd1.value !== pwd2.value) {
      return { passwordNotMatch: true }
    }
    return rv;

  }

  get nome(): FormControl {
    return <FormControl>this.signupForm.get('nome');
  }

  get email(): FormControl {
    return <FormControl>this.signupForm.get('email');
  }

  get surname(): FormControl {
    return <FormControl>this.signupForm.get('surname');
  }

  get password(): FormControl {
    return <FormControl>this.signupForm.get('password');
  }

  get password2(): FormControl {
    return <FormControl>this.signupForm.get('password2');
  }

  get profession(): FormControl {
    return <FormControl>this.signupForm.get('profession');
  }

}
