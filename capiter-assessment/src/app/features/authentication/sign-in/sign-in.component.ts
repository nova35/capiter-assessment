import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'sign-in',
    templateUrl: 'sign-in.component.html',
    styleUrls: ['sign-in.component.scss'],
})

export class SignInComponent implements OnInit 
{
    signInForm!:FormGroup;
    submitted!:boolean;

    constructor(private _formBuilder: FormBuilder) {}

    get frm() { return this.signInForm?.controls 
        ? this.signInForm?.controls : null }

    // submit form
    onSubmit() {
        this.submitted = true;
        const model = this.signInForm.value;
        console.log(model);
    }
    // Initiating form
    initForm() {
        this.signInForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
            confirmPassword: ['', [Validators.required,Validators.email]]
        });
    }

    ngOnInit() {
        this.initForm();
    }
}