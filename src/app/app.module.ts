import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    environment.production
      ? []
      : HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
          dataEncapsulation: false,
        }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
