import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { get, isUndefined } from "lodash";
import { ApiService } from "src/app/shared/services/api.service";
import { UserCrudDialogComponent, UserObj } from "../user-crud-dialog/user-crud-dialog.component";

export interface RespObj {
    data;
    page;
    per_page;
    support;
    total;
    total_page;
}

@Component({
    selector: 'users-list',
    templateUrl: 'users-list.component.html',
    styleUrls: ['users-list.component.scss'],
    providers: [ApiService]
})

export class UsersListComponent implements OnInit 
{
    usersListResponse:RespObj;
    usersList:UserObj[] = [];
    currentPage:number = 1;
    isLastPage:boolean;
    perPage:number = 6;

    constructor(
        private _dialog: MatDialog,
        private _apiService: ApiService) {}

    openDialog(context, user?) {
        const dialogRef = this._dialog.open(UserCrudDialogComponent, {
            data: !isUndefined(user) 
            ? { user, context } : { context },
            width: '40%',
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result === 'refresh' && !this.isLastPage) {
                this.usersList = [];
                this.getUsersList();
            }
        })
    }

    loadMore() {
        if (!this.isLastPage) {
            ++this.currentPage;
            this.getUsersList();
        }
    }
    
    getUsersList() {
        const params = { page: this.currentPage, per_page: 6 };
        const errFxn = err => {
            console.log(err);
        }
        this._apiService.list('api/users', params)
            .subscribe((resp:RespObj) => {
                this.usersListResponse = resp;
                this.usersList = [
                    ...this.usersList,
                    ...get(this.usersListResponse, 'data')
                ]
                this.isLastPage =  
                    this.usersList.length === get(this.usersListResponse, 'total');
            }, err => errFxn(err));
    }

    ngOnInit() {
        this.getUsersList();
    }
}