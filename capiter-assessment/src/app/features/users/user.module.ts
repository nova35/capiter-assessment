import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { MatToolbarModule } from "@angular/material/toolbar";

import { UsersRoutingModule } from "./user-routing.module";
import { UsersListComponent } from "./users-list/users-list.component";
import { PageContainerModule } from "src/app/shared/components/page-container/page-container.module";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatToolbarModule,
        PageContainerModule,
        UsersRoutingModule,
    ],
    declarations: [
        UsersListComponent
    ]
})

export class UsersModule {}