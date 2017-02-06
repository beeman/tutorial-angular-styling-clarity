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
        <a [routerLink]="['/', 'dashboard']" routerLinkActive="active" class="nav-link nav-icon">
          <clr-icon shape="home"></clr-icon>
        </a>
        <a [routerLink]="['/', 'settings']" routerLinkActive="active" class="nav-link nav-icon">
          <clr-icon shape="cog"></clr-icon>
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
        <li class="nav-item">
          <a class="nav-link" routerLinkActive="active" [routerLink]="['/', 'dashboard']">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLinkActive="active" [routerLink]="['/', 'posts']">Posts</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLinkActive="active" [routerLink]="['/', 'todos']">Todos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLinkActive="active" [routerLink]="['/', 'users']">Users</a>
        </li>
      </ul>
    </nav>
  `,
  styles: []
})
export class HeaderComponent { }
