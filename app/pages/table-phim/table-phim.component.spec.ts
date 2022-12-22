import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePhimComponent } from './table-phim.component';

describe('TablePhimComponent', () => {
  let component: TablePhimComponent;
  let fixture: ComponentFixture<TablePhimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePhimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
