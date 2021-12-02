import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { PageContainerComponent } from './page-container.component';

@NgModule({
    declarations: [
        PageContainerComponent
    ],
    exports: [
        PageContainerComponent
    ],
    imports: [
        RouterModule,
        MatToolbarModule
    ]
})
export class PageContainerModule
{
}
