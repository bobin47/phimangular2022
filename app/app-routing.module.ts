import { AdminComponent } from './pages/admin/admin.component';
import { TrangcanhanComponent } from './pages/trangcanhan/trangcanhan.component';
import { TrangdangnhapComponent } from './pages/trangdangnhap/trangdangnhap.component';
import { TrangdangkyComponent } from './pages/trangdangky/trangdangky.component';
import { TrangdatveComponent } from './pages/trangdatve/trangdatve.component';
import { TrangchitietComponent } from './pages/trangchitiet/trangchitiet.component';
import { TrangchuComponent } from './pages/trangchu/trangchu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'home', component: TrangchuComponent, },
  { path: 'chitiet/:id', component: TrangchitietComponent },
  { path: 'datve/:malichchiu', component: TrangdatveComponent },
  { path: 'dangky', component: TrangdangkyComponent },
  { path: 'dangnhap', component: TrangdangnhapComponent },
  { path: 'trangcanhan', component: TrangcanhanComponent },
  { path: 'admin', component: AdminComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
