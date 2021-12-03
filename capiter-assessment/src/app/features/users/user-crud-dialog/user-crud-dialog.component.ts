import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { get, has, isUndefined } from "lodash";
import { ApiService } from "src/app/shared/services/api.service";

export interface UserResp {
    data;
    support;
}

export interface UserObj {
    id;
    first_name;
    last_name;
    email;
    avatar;
}

@Component({
    selector: 'user-crud-dialog',
    templateUrl: 'user-crud-dialog.component.html',
    styleUrls: ['user-crud-dialog.component.scss'],
    providers: [ApiService]
})

export class UserCrudDialogComponent implements OnInit 
{
    loading:boolean = false;
    userForm:FormGroup;

    constructor(
        private _snackBar: MatSnackBar,
        private _apiService: ApiService,
        private _formBuilder: FormBuilder,
        @Inject(MAT_DIALOG_DATA) public data:any,
        private _dialogRef: MatDialogRef<UserCrudDialogComponent>,) {}

    get frm() { return this.userForm?.controls 
        ? this.userForm?.controls : null }

    closeDialog(arg?) {
        this._dialogRef.close(arg);
    }

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

    onSubmit() 
    {
        const formModel = this.userForm.value;
        this.loading = true;
        if (this.userForm.invalid) {
            this.loading = false;
            return;
        }
        const userCrudObj = {
            name: get(formModel, 'firstName') + ' ' + get(formModel, 'lastName'),
            job: get(formModel, 'job'),
        };
        const errFxn = err => {
            this.loading = false;
            const errMsg = get(err, 'error.error');
            this.showSnackbar(errMsg, 'error', 'Dismiss');
        };
        const postCrudFxn = (msg) => {
            this.loading = false;
            this.closeDialog('refresh');
            this.showSnackbar(msg, 'success', 'Dismiss');
        };
        const updateUser = () => {
            const userId = get(this.data, 'user.id');
            this._apiService.update('api/users', userId, userCrudObj)
                .subscribe(() => {
                    const msg = 'User details successfully updated';
                    postCrudFxn(msg);
                }, err => errFxn(err));
        };
        const createUser = () => {
            this._apiService.create('api/users', userCrudObj)
                .subscribe(() => {
                    const msg = 'User added successfully';
                    postCrudFxn(msg);
                }, err => errFxn(err));
        };
        has(this.data, 'user')
            ? updateUser() : createUser();
    }

    deleteUser() 
    {
        const userId = get(this.data, 'user.id');
        const errFxn = err => {
            const errMsg = get(err, 'error');
            this.showSnackbar(errMsg, 'error', 'Dismiss');
        }
        const postDeleteFxn = () => {
            this.closeDialog('refresh');
            const msg = 'User deleted successfully';
            this.showSnackbar(msg, 'success', 'Dismiss');
        }
        this._apiService.remove('api/users', userId)
            .subscribe(() => {
                postDeleteFxn()
            }, err => errFxn(err));
    }


    fetchUser() 
    {
        const userId = get(this.data, 'user.id');
        const errFxn = err => {
            console.log(err);
        }
        this._apiService.get('api/users', userId)
            .subscribe((resp:UserResp) => {
                const user = resp['data'];
                this.initForm(user);
            }, err => errFxn(err));
    }

    initForm(model?) 
    {
        const prefillValue = key => !isUndefined(model) 
            ? get(model, key) : '';
        this.userForm = this._formBuilder.group({
            firstName: [prefillValue('first_name'), [Validators.required]],
            lastName: [prefillValue('last_name'), [Validators.required]],
            job: ['', [Validators.required]],
        })
    }

    ngOnInit() 
    {
        this.initForm();
        if (has(this.data, 'user')) this.fetchUser();
    }
}