import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ArufaService } from "./arfua.service";
import { ArfuaTranslationService } from "./translation.service";
import { ArfuaApiService } from "./arufa-api.service";

@NgModule({
    imports: [CommonModule],
    providers: [ArufaService, ArfuaTranslationService, ArfuaApiService],
    declarations: []
})
export class CoreModule {}
