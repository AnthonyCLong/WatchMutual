import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'me', loadChildren: './me/me.module#MePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'stickers', loadChildren: './stickers/stickers.module#StickersPageModule' },  { path: 'create-account', loadChildren: './create-account/create-account.module#CreateAccountPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
