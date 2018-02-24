import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './debitors/debitor.module';
import { SearchPipe } from './searchPipe';
import { AppRoutingModule } from './app-routing.module';
import { EditComponent } from './debitors/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    EditComponent,
    SearchPipe

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
