
export const routes = [
  { path: 'projects', loadChildren: './features/projects/projects.module#ProjectsModule' },
  { path: '', loadChildren: './features/home/home.module#HomeModule' }
];
