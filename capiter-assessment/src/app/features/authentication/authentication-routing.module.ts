import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageContainerComponent } from "src/app/shared/components/page-container/page-container.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

const routes:Routes = [
    {
        path: '',
        component: PageContainerComponent,
        children: [
            {
                path: '', pathMatch: 'full', redirectTo: 'signin',
            },
            {
                path: 'signin',
                component: SignInComponent
            },
            {
                path: 'signup',
                component: SignUpComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AuthenticationRoutingModule {}