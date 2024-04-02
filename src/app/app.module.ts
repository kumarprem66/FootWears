import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ContainerComponent } from './container/container.component';
import { SearchComponent } from './container/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './container/product-list/product-list.component';
import { ProductComponent } from './container/product-list/product/product.component';
import { FilterComponent } from './container/product-list/filter/filter.component';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';
import { ConceptComponent } from './concept/concept.component';
import { ToggleComponent } from './toggle/toggle.component';
import { FeaturedBrandComponent } from './container/featured-brand/featured-brand.component';
import { SetBackground } from './CustomDirectives/SetBackground';
import { HighlightDirective } from './CustomDirectives/highlight.directive';
import { ApphoverDirective } from './CustomDirectives/apphover.directive';
import { DisabledDirectiveDirective } from './CustomDirectives/disabled-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    ContainerComponent,
    SearchComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailComponent,
    ConceptComponent,
    ToggleComponent,
    FeaturedBrandComponent,
    SetBackground,
    HighlightDirective,
    ApphoverDirective,
    DisabledDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
