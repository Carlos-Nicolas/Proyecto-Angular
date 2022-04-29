import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCharlyComponent } from './table-charly.component';

describe('TableCharlyComponent', () => {
  let component: TableCharlyComponent;
  let fixture: ComponentFixture<TableCharlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCharlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCharlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
