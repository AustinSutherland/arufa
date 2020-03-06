import { SharedModule } from "../../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReviewComponent } from "./review.component";
import { ReviewService } from "./review.service";
import { ReviewRoutingModule } from "./review-routing.module";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [CommonModule, ReviewRoutingModule, SharedModule, FormsModule],
    declarations: [ReviewComponent],
    providers: [ReviewService]
})
export class ReviewModule {}
