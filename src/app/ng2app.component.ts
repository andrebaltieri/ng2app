import { Component } from '@angular/core';
import { HeadbarComponent } from './shared/headbar/headbar.component'

@Component({
  moduleId: module.id,
  selector: 'ng2app-app',
  directives: [HeadbarComponent],
  templateUrl: 'ng2app.component.html',
  styleUrls: ['ng2app.component.css']
})

export class Ng2appAppComponent {
  title = 'ng2app works!';
}
