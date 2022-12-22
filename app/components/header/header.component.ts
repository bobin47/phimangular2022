import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user = localStorage.getItem("userInfo" || "")
  check: boolean = true
  maNguoiDung:string = ""
  nguoidung: string = "KhachHang"

  ngOnInit(): void {
    if (this.user) {
      this.check = true
    } else {
      this.check = false
    }
    const maNguoiDung = JSON.parse(this.user || "").maLoaiNguoiDung
    this.maNguoiDung = maNguoiDung
  }


  dangXuat() {

   
    localStorage.clear()
    document.location.assign("/home")
  }
}
