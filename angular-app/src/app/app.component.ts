import { Component } from '@angular/core';
import { NbIconLibraries } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';

constructor(private iconLibraries: NbIconLibraries) {
  this.iconLibraries.registerFontPack('font-awesome');

}
}
