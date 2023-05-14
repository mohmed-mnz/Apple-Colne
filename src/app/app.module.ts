import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ContentComponent } from './component/content/content.component';
import { SliderComponent } from './component/myslider/slider.component';
import { ProductimgComponent } from './component/myprduct/productimg.component';
import { SlideComponent } from './component/slide/slide.component';
import { ParaComponent } from './component/para/para.component';
import { FooterComponent } from './component/footer/footer.component';
import { SavesecComponent } from './component/savesec/savesec.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    SliderComponent,
    ProductimgComponent,
    SlideComponent,
    ParaComponent,
    FooterComponent,
    SavesecComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
