import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { HomeService } from "./home.service";
import { HomeRoutingModule } from "./home-routing.module";
import { NzIconModule } from "ng-zorro-antd";

@NgModule({
    imports: [CommonModule, HomeRoutingModule, NzIconModule],
    declarations: [HomeComponent],
    providers: [HomeService]
})
export class HomeModule {}
