import { MoiveService } from './../../core/service/moive.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-showtime',
  templateUrl: './showtime.component.html',
  styleUrls: ['./showtime.component.scss']
})
export class ShowtimeComponent {
  @Input() thongTinPhim: any
  public thongTinCupRap: any
  public thongTinCacRap:any

  constructor(private movieSV: MoiveService) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //console.log(this.thongTinPhim.lichChieu[0].thongTinRap.maHeThongRap)
    this.thongTinCupRap = this.thongTinPhim.lichChieu
    console.log(this.thongTinCupRap);
    for (const item of this.thongTinCupRap) {
      console.log(item.thongTinRap.maHeThongRap);
      this.movieSV.LayThongTinCumRapTheoHeThong(item.thongTinRap.maHeThongRap).subscribe(res=>{
        console.log(res);
        this.thongTinCacRap = res
      })
    }
    // console.log(this.thongTinCupRap);

    // this.movieSV.LayThongTinCumRapTheoHeThong()
    // this.movieSV.LayThongTinHeThongRap()
  }

}
