import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm! : FormGroup
  constructor(private fb: FormBuilder, private auth: AuthService, private router : Router){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['',Validators.required ],
     password: ['',Validators.required ]
    })
  }
  onLogin(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      //send object to db
      this.auth.login(this.loginForm.value)
      .subscribe({
        next:(res)=>{
          alert(res.message);
          this.router.navigate(['/researchbookdash'])
        //  console.log(res.message);
         this.loginForm.reset();
         
        },
        error:(err)=>{
          alert(err?.error.message)
        }
      })
      this.auth.login_valid()
      
    }
    else{
      //throw error
      console.log("form is not valid")
      this.validateForm(this.loginForm)
      alert("Your form is invalid")
    }
  }
  
  private validateForm(formgroup: FormGroup){
    Object.keys(formgroup.controls).forEach(field => {
      const control = formgroup.get(field);
      if(control instanceof FormControl){
        control.markAsDirty({onlySelf:true})
      }else if(control instanceof FormGroup){
        this.validateForm(control)
      }
    });
  }
}
