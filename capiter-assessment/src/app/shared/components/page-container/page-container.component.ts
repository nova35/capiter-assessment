import { Component } from '@angular/core';

@Component({
    selector: 'page-container',
    template: `
        <div class="w-100-p">
            <mat-toolbar class="px-5 mat-elevation-z1 bg-white">
                <span>Capiter Assessment</span>
            </mat-toolbar>
            <router-outlet class=""></router-outlet>
        </div>`,
})

export class PageContainerComponent 
{
}