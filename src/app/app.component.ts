import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-cart';
  loadedFeature = 'recipes'

  onNavigate(feature) {
    console.log(feature);
    this.loadedFeature = feature;
  }
}
