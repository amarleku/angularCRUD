import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
              
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/welcome']">Home</a></li>
                    <li><a [routerLink]="['/debitors']">Debitors List</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
    `
})
export class AppComponent {
  pageTitle: string = 'welcome';
}
