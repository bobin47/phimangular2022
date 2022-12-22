import { MoiveService } from './../../core/service/moive.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trangchitiet',
  templateUrl: './trangchitiet.component.html',
  styleUrls: ['./trangchitiet.component.scss']
})
export class TrangchitietComponent {

  public thongTinPhim: any

  constructor(private movieService: MoiveService, private activatedRoute: ActivatedRoute,) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.activatedRoute.params.subscribe(res => {
      const id = res['id']
      this.movieService.LayThongTinPhim(id).subscribe(res => {
        this.thongTinPhim = res
      })
    })
  }
}
