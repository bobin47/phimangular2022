import { MoiveService } from './../../core/service/moive.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';
import { ToastService } from 'angular-toastify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trangdangnhap',
  templateUrl: './trangdangnhap.component.html',
  styleUrls: ['./trangdangnhap.component.scss']
})
export class TrangdangnhapComponent {
  loginForm: FormGroup = new FormGroup({
    taiKhoan: new FormControl(''),
    matKhau: new FormControl('')
  })

  constructor(private movieService: MoiveService,
    private _toastService: ToastService,
    private router: Router) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const userInfo = localStorage.getItem("userInfo" || "")
    console.log(userInfo);
    if (userInfo) {
      const { maLoaiNguoiDung } = JSON.parse(userInfo || "");
      if (maLoaiNguoiDung === 'KhachHang') {
        this.router.navigate(['/home']);

      } else {
        this.router.navigate(['/admin']);
      }
    }
  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

  }

  onSubmit() {
    console.log(this.loginForm.value);
    const value = this.loginForm.value
    this.movieService.DangNhap(value).subscribe(res => {
      console.log("res", res);
      localStorage.setItem('userInfo', JSON.stringify(res));
      this._toastService.info("dang nhap thanh cong")
      setTimeout(() => {
        const userInfo = localStorage.getItem("userInfo" || "")
        console.log(userInfo);
        const { maLoaiNguoiDung } = JSON.parse(userInfo || "")
        console.log("maLoaiNguoiDung", maLoaiNguoiDung);
        if (maLoaiNguoiDung === 'KhachHang') {
         document.location.assign("/home")

        } else {
          document.location.assign("/admin")

        }

      }, 3000)


    }, err => {
      console.log(err);
      this._toastService.info("dang nhap that bai")
    })

  }


}



