import { MoiveService } from './../../core/service/moive.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'angular-toastify';


@Component({
  selector: 'app-trangdatve',
  templateUrl: './trangdatve.component.html',
  styleUrls: ['./trangdatve.component.scss']
})
export class TrangdatveComponent {

  public maLichChieu: any
  public danhSachGhe: any
  public soGheDaDat: any = 0
  public soGheConLai: any = 0
  public danhSachGheDangDat: any[] = []
  public ve: any[] = [];



  constructor(private movieservice: MoiveService,
    private activatedRoute: ActivatedRoute,
    private _toastService: ToastService,) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      res => {
        console.log(res);
        this.maLichChieu = res
        this.movieservice.LayDanhSachPhongVe(this.maLichChieu.malichchiu).subscribe(
          res => {

            this.danhSachGhe = res.danhSachGhe
            console.log(this.danhSachGhe);

            for (let i of this.danhSachGhe) {
              if (i.daDat === true) {
                this.soGheDaDat++;
              } else {
                this.soGheConLai++;
              }
            }
          }
        )
      }
    )
  }

  datgheOutput(value: Event, ghe: any) {
    let ve: { MaGhe: number; GiaVe: number } = {
      MaGhe: ghe.maGhe,
      GiaVe: ghe.giaVe,
    };
    console.log(ghe);
    if (value) {
      this.soGheConLai--;
      this.soGheDaDat++;
      this.danhSachGheDangDat.push(ghe);
      this.ve.push(ve);
      console.log(this.danhSachGheDangDat);
      console.log(this.ve);
    } else {
      this.soGheConLai++;
      this.soGheDaDat--;
      for (let index in this.danhSachGheDangDat) {
        //console.log(index);
        if (this.danhSachGheDangDat[index].maGhe == ghe.maGhe) {
          this.danhSachGheDangDat.splice(parseInt(index), 1);
        }
      }
      for (let iVe in this.ve) {
        if (this.ve[iVe].MaGhe === ve.MaGhe) {
          this.ve.splice(parseInt(iVe), 1);
        }
      }
      console.log(this.danhSachGheDangDat);
      console.log(this.ve);
    }
  }

  layTaiKhoanNguoiDung() {
    const userInfo = localStorage.getItem('userInfo');
    console.log(typeof userInfo);
    const { taiKhoan } = JSON.parse(userInfo || "");
    console.log(taiKhoan);
    let NguoiDung: string = taiKhoan;
    if (userInfo !== null) {
      return NguoiDung;
    } else {
      console.log('dang nhap de vao dat ve');
      return ""
    }
  }

  datVe() {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      let NguoiDung = this.layTaiKhoanNguoiDung();
      let khacHangDatve: {
        maLichChieu: number;
        danhSachVe: any[];
        taiKhoanNguoiDung: string;
      } = {
        maLichChieu: this.maLichChieu.malichchiu,
        danhSachVe: this.ve,
        taiKhoanNguoiDung: NguoiDung,
      };

      console.log(khacHangDatve);

      this.movieservice.datve(khacHangDatve).subscribe(
        res => {
          console.log("res", res);
          this._toastService.info("dat ve thanh cong")
        },
        err => {
          console.log("res", err);
          this._toastService.info("dat ve thanh cong")
        }
      )

    }else{
      this._toastService.info("vui long dang nhap de dat ve")
    }
  }
}

