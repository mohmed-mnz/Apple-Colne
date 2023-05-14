import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  Showproduct():void{
    document.writeln("done");
    location.href="https://www.apple.com/shop/buy-iphone/iphone-14-pro";
  }
}
