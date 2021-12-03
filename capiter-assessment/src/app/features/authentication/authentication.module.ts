import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

import { PageContainerModule } from "src/app/shared/components/page-container/page-container.module";
import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        FlexLayoutModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,

        AuthenticationRoutingModule,
        PageContainerModule,
    ],
    declarations: [
        SignInComponent,
        SignUpComponent,
    ]
})

export class AuthenticationModule {}