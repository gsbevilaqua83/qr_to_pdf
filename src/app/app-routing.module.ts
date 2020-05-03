import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pdfviewer',
    loadChildren: () => import('./pdfviewer/pdfviewer.module').then( m => m.PdfviewerPageModule)
  },
  {
    path: 'pdfolder',
    loadChildren: () => import('./pdfolder/pdfolder.module').then( m => m.PdfolderPageModule)
  },
  {
    path: 'qrcam',
    loadChildren: () => import('./qrcam/qrcam.module').then( m => m.QrcamPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
