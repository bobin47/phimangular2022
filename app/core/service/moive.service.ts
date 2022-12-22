import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoiveService {

  constructor(private http: HttpClient) { }

  public LayDanhSachPhim(): Observable<any> {
    return this.http.get<any>(
      'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03')
  }

  public LayThongTinPhim(id: string): Observable<any> {
    return this.http.get<any>(`https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
  }

  public LayThongTinHeThongRap(maHeThongRap: string): Observable<any> {
    return this.http.get<any>(`https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap?maHeThongRap=${maHeThongRap}`)
  }

  public LayThongTinCumRapTheoHeThong(maHeThongRap: string): Observable<any> {
    return this.http.get<any>(`https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`)
  }

  public LayDanhSachPhongVe(maLichChieu: string): Observable<any> {
    return this.http.get<any>(`https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
  }

  public DangNhap(value: any): Observable<any> {

    return this.http.post<any>('https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap', value)
  }

  public DangKy(value: any): Observable<any> {
    console.log(value);
    return this.http.post<any>('https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy', value)
  }

  public datve(khachHangDatve: any): Observable<any> {
    return this.http.post<any>(
      'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe',
      khachHangDatve
    );
  }

  public LayDanhNguoiDung(): Observable<any> {
    return this.http.get<any>(`https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP03`)
  }

  public themPhim(phim: any): Observable<any> {
    return this.http.post<any>(
      ' https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim',
      phim
    );
  }




}
