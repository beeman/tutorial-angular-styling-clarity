import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="header-1">
      <div class="branding">
        <a [routerLink]="['/']" class="nav-link">
          <clr-icon shape="shield"></clr-icon>
          <span class="title">Angular CLI</span>
        </a>
      </div>
      <div class="header-nav">
        <a *ngFor="let headerLink of headerLinks" [routerLink]="headerLink.link" routerLinkActive="active" class="nav-link nav-icon">
          <clr-icon [attr.shape]="headerLink.icon"></clr-icon>
        </a>
      </div>
      <form class="search">
        <label for="search_input">
          <input id="search_input" type="text" placeholder="Search for keywords...">
        </label>
      </form>
      <div class="header-actions">
        <clr-dropdown class="dropdown bottom-right">
          <button class="nav-icon" clrDropdownToggle>
            <clr-icon shape="user"></clr-icon>
            <clr-icon shape="caret down"></clr-icon>
          </button>
          <div class="dropdown-menu">
            <a clrDropdownItem>About</a>
            <a clrDropdownItem>Preferences</a>
            <a clrDropdownItem>Log out</a>
          </div>
        </clr-dropdown>
      </div>
    </header>
    <nav class="subnav">
      <ul class="nav">
        <li *ngFor="let subLink of subLinks" class="nav-item">
          <a class="nav-link" routerLinkActive="active" [routerLink]="subLink.link">{{subLink.label}}</a>
        </li>
      </ul>
    </nav>
  `,
  styles: []
})
export class HeaderComponent {

  headerLinks = [
    { link: ['/', 'dashboard'], icon: 'home'},
    { link: ['/', 'settings'], icon: 'cog'},
  ];

  subLinks = [
    { link : ['/', 'dashboard'], label: 'Dashboard' },
    { link : ['/', 'posts'], label: 'Posts' },
    { link : ['/', 'todos'], label: 'Todos' },
    { link : ['/', 'users'], label: 'Users' },
  ];

}
