import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageContainerComponent } from "src/app/shared/components/page-container/page-container.component";
import { UsersListComponent } from "./users-list/users-list.component";

const routes:Routes = [
    {
        path: '',
        component: PageContainerComponent,
        children: [
            { path: '', component: UsersListComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UsersRoutingModule {}