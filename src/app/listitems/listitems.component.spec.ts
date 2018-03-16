import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListitemsComponent } from './listitems.component';

describe('ListitemsComponent', () => {
  let component: ListitemsComponent;
  let fixture: ComponentFixture<ListitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
