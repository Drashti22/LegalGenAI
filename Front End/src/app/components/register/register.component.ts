import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  signupForm!: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService){}
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      organization: [''],
      contactdetails: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      designation: ['Designation', Validators.required]
    })
  }
 submitForm(){
  if(this.signupForm.valid){
    console.log(this.signupForm.value);
    this.auth.signUp(this.signupForm.value)
    .subscribe({
      next:(res=>{
        alert(res.message);
        this.signupForm.reset();
      })
      ,error:(err=>{
        alert(err?.error.message)
      })
    })
  }else{
    console.log("form is not valid")
      this.validateForm(this.signupForm)
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
