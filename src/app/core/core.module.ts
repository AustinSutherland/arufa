import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ArfuaService } from "./arfua.service";
import { ArfuaTranslationService } from "./translation.service";

@NgModule({
    imports: [CommonModule],
    providers: [ArfuaService, ArfuaTranslationService],
    declarations: []
})
export class CoreModule {}
