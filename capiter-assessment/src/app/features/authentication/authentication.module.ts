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

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        FlexLayoutModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,

        AuthenticationRoutingModule,
        PageContainerModule,
    ],
    declarations: [
        SignInComponent,
        SignUpComponent,
    ]
})

export class AuthenticationModule {}