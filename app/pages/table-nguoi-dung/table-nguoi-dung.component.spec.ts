import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableNguoiDungComponent } from './table-nguoi-dung.component';

describe('TableNguoiDungComponent', () => {
  let component: TableNguoiDungComponent;
  let fixture: ComponentFixture<TableNguoiDungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableNguoiDungComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableNguoiDungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
