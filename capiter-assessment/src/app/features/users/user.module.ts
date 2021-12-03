import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";

import { UsersRoutingModule } from "./user-routing.module";
import { UsersListComponent } from "./users-list/users-list.component";
import { PageContainerModule } from "src/app/shared/components/page-container/page-container.module";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { UserCrudDialogComponent } from "./user-crud-dialog/user-crud-dialog.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        FlexLayoutModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,

        PageContainerModule,
        UsersRoutingModule,
    ],
    declarations: [
        UsersListComponent,
        UserCrudDialogComponent,
    ],
    entryComponents: [
        UserCrudDialogComponent
    ]
})

export class UsersModule {}