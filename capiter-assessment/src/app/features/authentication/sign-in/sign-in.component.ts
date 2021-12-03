import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { get } from "lodash";
import { ApiService } from "src/app/shared/services/api.service";
import { SignUpModel } from "../sign-up/sign-up.component";

@Component({
    selector: 'sign-in',
    templateUrl: 'sign-in.component.html',
    styleUrls: ['sign-in.component.scss'],
    providers: [ApiService]
})

export class SignInComponent implements OnInit 
{
    signInForm!:FormGroup;
    submitted:boolean = false;

    constructor(
        private _router: Router,
        private _snackBar: MatSnackBar,
        private _apiService: ApiService,
        private _formBuilder: FormBuilder) {}

    get frm() { return this.signInForm?.controls 
        ? this.signInForm?.controls : null }

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

    // submit form
    onSubmit() {
        this.submitted = true;
        const model = this.signInForm.value;
        if (this.signInForm.invalid) {
            this.submitted = false;
            return;
        }
        const errFxn = err => {
            const errMsg = get(err, 'error.error');
            this.showSnackbar(errMsg, 'error', 'Dismiss');
        };
        this._apiService.create('api/login', model)
            .subscribe(resp => {
                localStorage.setItem('user', JSON.stringify(resp));
                this._router.navigate(['/users']);
            }, err => errFxn(err));
    }
    // Initiating form
    initForm() {
        this.signInForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
        });
    }

    ngOnInit() {
        this.initForm();
    }
}