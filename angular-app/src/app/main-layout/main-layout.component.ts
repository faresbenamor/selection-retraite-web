import {Component, OnInit} from '@angular/core';
import {NbMenuItem, NbSidebarService} from '@nebular/theme';
import {ajaxGetJSON} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  items: NbMenuItem[] = [{
    title: 'Residences',
    icon: 'home-outline',
    link: '/main/residence',
    pathMatch: 'prefix',
  },
    {
      title: 'Utilisateurs',
      icon: 'person-outline',
      link: '/main/users',
      pathMatch: 'prefix'
    }];

  constructor(private sidebarService: NbSidebarService) {
  }


  toggle(): boolean {
    this.sidebarService.toggle(true);
    return false;
  }
  ngOnInit(): void {
    // @ts-ignore
    //ajaxGetJSON('assets/menu.json').subscribe(r => this.items = r);
  }

}
