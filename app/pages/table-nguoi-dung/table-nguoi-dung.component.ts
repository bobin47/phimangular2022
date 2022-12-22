import { MoiveService } from './../../core/service/moive.service';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-table-nguoi-dung',
  templateUrl: './table-nguoi-dung.component.html',
  styleUrls: ['./table-nguoi-dung.component.scss']
})
export class TableNguoiDungComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: any = new MatTableDataSource();
  danhSachNguoidung: any[] = []
  @ViewChild(MatPaginator) paginator !: MatPaginator

  constructor(private moiveService: MoiveService) {
  }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.moiveService.LayDanhNguoiDung().subscribe({
      next: res => {
        console.log(res);
        this.danhSachNguoidung = res
        this.dataSource = new MatTableDataSource(this.danhSachNguoidung)
        this.dataSource.paginator = this.paginator
      }
    })
  }

  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
