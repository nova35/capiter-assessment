import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from "@angular/forms";

@Component({
    selector: 'sign-up',
    templateUrl: 'sign-up.component.html',
    styleUrls: ['sign-up.component.scss'],
})

export class SignUpComponent implements OnInit 
{   
    signUpForm!:FormGroup;
    submitted!:boolean;

    constructor(private _formBuilder: FormBuilder) {}

    get frm() { return this.signUpForm?.controls 
        ? this.signUpForm?.controls : null }

    public matchValues(
        matchTo: string // name of the control to match to
        ): (AbstractControl) => ValidationErrors | null {
        return (control: AbstractControl): ValidationErrors | null => {
            return !!control.parent &&
            !!control.parent.value &&
            control.value === control.parent.controls[matchTo].value
            ? null
            : { notSame: true };
        };
    }

    // submit form
    onSubmit() {
        this.submitted = true;
        const model = this.signUpForm.value;
        console.log(model);
    }

    initForm()
    {
        this.signUpForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
            confirmPassword: ['', 
                [Validators.required, this.matchValues('password')]]
        });
    }

    ngOnInit() {
        this.initForm();
    }
}