import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { HttpModule } from '@angular/http';

// Components
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookListItemComponent } from './book-list-item/book-list-item.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { ExampleAnimationComponent } from './example-animation/example-animation.component';

// Services
import { BookStoreService } from './shared/book-store.service';
import { HomeComponent } from './home/home.component';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookListItemComponent,
    BookDetailsComponent,
    ExampleAnimationComponent,
    HomeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpModule
  ],
  providers: [BookStoreService, ViewportRuler],
  bootstrap: [AppComponent]
})
export class AppModule { }
