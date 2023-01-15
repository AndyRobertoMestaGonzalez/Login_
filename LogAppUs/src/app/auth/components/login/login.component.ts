import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  formularioLog: FormGroup = this.fb.group({
    id:['',[Validators.required,Validators.minLength(1)]],
    pass:['',[Validators.required,Validators.minLength(1)]]
  })
  constructor(private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,private toastr: ToastrService){}
    
    Login(){
      // console.log(this.formularioLog.value);
      // console.log(this.formularioLog.valid);
      // this.router.navigateByUrl("/dashboard");
      if(this.formularioLog.valid){
        const {id,pass} = this.formularioLog.value;
        this.authService.login(id,pass).subscribe(res=>{
          if(res===true){
            this.router.navigateByUrl('/dashboard');

            this.toastr.success(id,"ingreso correcto");
            }else{
              
              this.toastr.error(res,"Error",{
                timeOut:4000,
                progressAnimation:"increasing"
              })
            }
        })
      }else{
        this.toastr.error('Verifique sus datos','error')
      }
    }
}
