import { NgModule } from "@angular/core";

import { ToolbarComponent } from "./toolbar/toolbar.component";

import { FormsModule } from "@angular/forms";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { registerLocaleData, CommonModule } from "@angular/common";
import en from "@angular/common/locales/en";
import { HttpClientModule } from "@angular/common/http";
import { UserInputComponent } from "./user-input/user-input.component";
import { ItemInfoComponent } from "./item-info/item-info.component";

registerLocaleData(en);

@NgModule({
    imports: [CommonModule, FormsModule, HttpClientModule, NgZorroAntdModule],

    declarations: [ToolbarComponent, UserInputComponent, ItemInfoComponent],
    exports: [ToolbarComponent, UserInputComponent, ItemInfoComponent]
})
export class SharedModule {}
