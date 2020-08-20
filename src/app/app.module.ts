import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule as HttpModule, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BasicHeighlightDirective } from './basic-heighlight/basic-heighlight.directive';
import { BetterHeighlightDirective } from './better-heighlight/better-heighlight.directive';
import { UnlessDirective } from './custom-structural-directive/unless.directive'
import { DropDownDirective } from './shared/drop-down/dropdown.directive';
import { LoggingService  } from './services/logging.service';
import {MusicFestivalComponent} from "./music-festival/music-festival.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BasicHeighlightDirective,
    BetterHeighlightDirective,
    UnlessDirective,
    DropDownDirective,
    MusicFestivalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
