import { Component} from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';

  showHead: boolean = false;

  constructor(public router: Router) {
   
      router.events.forEach((event) => {
        if (event instanceof NavigationStart) {
          if ((event['url'] == '/about')||(event['url'] == '/samples')||(event['url'] == '/contact')) {
            this.showHead = false;
          } else {
            // console.log("NU")
            this.showHead = true;
          }
        }
      });
    }

}

