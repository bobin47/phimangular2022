import { MoiveService } from './../../core/service/moive.service';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastService } from 'angular-toastify';


@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.scss']
})

export class TrangchuComponent {
  public danhSachPhim: any = []

  constructor(private movieService: MoiveService, private _toastService: ToastService) { }

  ngOnInit(): void {
    this.movieService.LayDanhSachPhim().subscribe((res) => {
      this.danhSachPhim = res
      console.log(this.danhSachPhim);
    }
    )
    const user = localStorage.getItem("userInfo")
    if (user) {
      
      this._toastService.info("dang nhap thanh cong")
      console.log("user", typeof user);
    }
  }


  

}
