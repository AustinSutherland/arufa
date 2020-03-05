import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LessonsComponent } from "./lessons.component";
import { LessonsService } from "./lessons.service";
import { LessonsRoutingModule } from "./lessons-routing.module";
import { NzInputModule } from "ng-zorro-antd";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [CommonModule, LessonsRoutingModule, NzInputModule, FormsModule],
    declarations: [LessonsComponent],
    providers: [LessonsService]
})
export class LessonsModule {}
