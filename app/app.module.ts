import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { TrangchuComponent } from './pages/trangchu/trangchu.component';
import { TrangchitietComponent } from './pages/trangchitiet/trangchitiet.component';
import { TrangdangnhapComponent } from './pages/trangdangnhap/trangdangnhap.component';
import { TrangdangkyComponent } from './pages/trangdangky/trangdangky.component';
import { TrangdatveComponent } from './pages/trangdatve/trangdatve.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu'; import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { PhimComponent } from './components/phim/phim.component';
import { CardComponent } from './components/card/card.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SafePipe } from './pipes/safe.pipe';
import { ShowtimeComponent } from './components/showtime/showtime.component';
import { TrangcanhanComponent } from './pages/trangcanhan/trangcanhan.component';
import { AuthInterceptor } from './core/intercepter/intercepter';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ToastService, AngularToastifyModule } from 'angular-toastify';
import { ListGheComponent } from './components/list-ghe/list-ghe.component';
import { GheItemComponent } from './components/ghe-item/ghe-item.component';
import { ThongtingheComponent } from './components/thongtinghe/thongtinghe.component';
import { AdminComponent } from './pages/admin/admin.component';
import { TableNguoiDungComponent } from './pages/table-nguoi-dung/table-nguoi-dung.component';
import { TablePhimComponent } from './pages/table-phim/table-phim.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ThemphimComponent } from './pages/themphim/themphim.component';
import { MatSelectModule } from '@angular/material/select';
const material = [MatSelectModule, MatPaginatorModule, MatTableModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatGridListModule, MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatMenuModule, MatCardModule]

@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    TrangchitietComponent,
    TrangdangnhapComponent,
    TrangdangkyComponent,
    TrangdatveComponent,
    HeaderComponent,
    FooterComponent,
    PhimComponent,
    CardComponent,
    SafePipe,
    ShowtimeComponent,
    TrangcanhanComponent,
    ListGheComponent,
    GheItemComponent,
    ThongtingheComponent,
    AdminComponent,
    TableNguoiDungComponent,
    TablePhimComponent,
    ThemphimComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    material,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularToastifyModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    ToastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
