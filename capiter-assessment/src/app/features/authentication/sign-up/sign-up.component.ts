import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { get } from "lodash";
import { ApiService } from "src/app/shared/services/api.service";

export interface SignUpModel {
    id:number;
    token:string;
}

@Component({
    selector: 'sign-up',
    templateUrl: 'sign-up.component.html',
    styleUrls: ['sign-up.component.scss'],
    providers: [ApiService]
})

export class SignUpComponent implements OnInit 
{   
    signUpForm!:FormGroup;
    submitted:boolean = false;

    constructor(
        private _router: Router,
        private _snackBar: MatSnackBar,
        private _apiService: ApiService,
        private _formBuilder: FormBuilder) {}

    get frm() { return this.signUpForm?.controls 
        ? this.signUpForm?.controls : null }

    showSnackbar(content, context, action?) {
        let sb = this._snackBar.open(content, action, {
            duration: 5000,
            panelClass: context === 'success' 
                ? ['bg-success'] : ['bg-danger'],
            });
            sb.onAction().subscribe(() => {
            sb.dismiss();
            });
    }

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
        if (this.signUpForm.invalid) {
            this.submitted = false;
            return;
        }
        const errFxn = err => {
            const errMsg = get(err, 'error.error');
            this.showSnackbar(errMsg, 'error', 'Dismiss');
        }
        this._apiService.create('api/regiser', model)
            .subscribe((resp:SignUpModel) => {
                const msg = 'Account successfully registered';
                this.showSnackbar(msg, 'success', 'Dismiss');
                this._router.navigate(['/authentication/signin']);
            }, err => errFxn(err));
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