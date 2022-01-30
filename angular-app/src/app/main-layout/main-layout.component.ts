import {Component, OnInit} from '@angular/core';
import {NbMenuItem, NbSidebarService} from '@nebular/theme';
import {ajaxGetJSON} from 'rxjs/internal-compatibility';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  items: NbMenuItem[] = [{
    title: 'Dashboard',
    icon: 'home-outline',
    link: 'details',
    pathMatch: 'prefix',
  },
    {
      title: 'Activités',
      icon: 'person-outline',
      link: '/main/activity',
      pathMatch: 'prefix'
    },
    {
      title: 'Nouvelles',
      icon: 'person-outline',
      link:  'news',
      pathMatch: 'prefix'
    },
    {
      title: 'Alertes',
      icon: 'person-outline',
      link: '/main/alertes',
      pathMatch: 'prefix'
    },
    {
      title: 'Menu',
      icon: 'person-outline',
      link: '/main/day',
      pathMatch: 'prefix'
    },
    {
      title: 'Photos',
      icon: 'person-outline',
      link: '/main/album',
      pathMatch: 'prefix'
    }
  ];

  constructor(private sidebarService: NbSidebarService, private route: ActivatedRoute) {
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
