import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ToolbarComponent } from "./toolbar/toolbar.component";

import { BrowserModule } from "@angular/platform-browser";

import { FormsModule } from "@angular/forms";
import { NgZorroAntdModule, NZ_I18N, NZ_ICONS, en_US } from "ng-zorro-antd";
import { registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";
import { HttpClientModule } from "@angular/common/http";

registerLocaleData(en);

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        NgZorroAntdModule
    ],

    declarations: [ToolbarComponent],
    exports: [ToolbarComponent]
})
export class SharedModule {}
