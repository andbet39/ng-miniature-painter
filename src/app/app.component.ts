import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nz-layout>
      <nz-header>
        <div class="logo"></div>
        <ul nz-menu nzTheme="dark" nzMode="horizontal">
          <li routerLink="" nz-menu-item>Home</li>
          <li routerLink="projects" nz-menu-item>Projects</li>
          <li nz-menu-item>nav 2</li>
          <li nz-menu-item>nav 3</li>
        </ul>
      </nz-header>
      <nz-content>
        <div class="inner-content"><router-outlet></router-outlet></div>
      </nz-content>
      <nz-footer>Ant Design ©2019 Implement By Angular</nz-footer>
    </nz-layout>
  `,
  styles: [`
    .logo {
      width: 120px;
      height: 31px;
      background: rgba(255, 255, 255, 0.2);
      margin: 16px 24px 16px 0;
      float: left;
    }

    [nz-menu] {
      line-height: 64px;
    }

    nz-breadcrumb {
      margin: 16px 0;
    }

    nz-content {
      padding: 0 50px;
    }

    nz-footer {
      text-align: center;
    }

    .inner-content {
      background: #fff;
      padding: 24px;
      min-height: 650px;
    }
    `]
})
export class AppComponent {
  title = 'ng-miniature-painter';
}
