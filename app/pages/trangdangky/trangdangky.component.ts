import { MoiveService } from './../../core/service/moive.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-trangdangky',
  templateUrl: './trangdangky.component.html',
  styleUrls: ['./trangdangky.component.scss']
})
export class TrangdangkyComponent {
  registerFrom:FormGroup = new FormGroup({
    taiKhoan:new FormControl(''),
    matKhau: new FormControl(''),
    email: new FormControl(''),
    soDt: new FormControl(''),
    maLoaiNguoiDung: new FormControl(''),
    hoTen: new FormControl(''),
  })

  constructor(private movieService:MoiveService){
      
  }

  onSubmit(){

    const newValue = { ...this.registerFrom.value, maNhom: "GP03", }
    this.movieService.DangKy(newValue).subscribe(
      res=>{
        console.log(res);
      }
    )
    console.log(newValue);
  }
}
