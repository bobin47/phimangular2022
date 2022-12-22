import { MoiveService } from './../../core/service/moive.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-themphim',
  templateUrl: './themphim.component.html',
  styleUrls: ['./themphim.component.scss']
})
export class ThemphimComponent {

  constructor(private _toastService: ToastService, private movieSV: MoiveService) { }

  phimForm = new FormGroup({
    maPhim: new FormControl(""),
    tenPhim: new FormControl(''),
    biDanh: new FormControl(''),
    trailer: new FormControl(''),
    hinhAnh: new FormControl(''),
    danhGia: new FormControl(''),
    moTa: new FormControl(''),
    maNhom: new FormControl(""),
    ngayKhoiChieu: new FormControl(''),
  });


  addInfoToast() {
    this._toastService.info('message');
  }

  onSubmit() {

    let obj1 = {
      maPhim: Number(this.phimForm.value.maPhim),
      danhGia: Number(this.phimForm.value.danhGia)
    }

    let obj2 = Object.assign(this.phimForm.value, obj1)
    console.log(obj2);


    this.movieSV.themPhim(obj2).subscribe(
      res => {
        console.log(res); 
        this._toastService.info('them Phim thanh cong');
      },
      err => {
        console.log("eee", err.error);
        this._toastService.info(err.error);
      }
    )
  }
}
