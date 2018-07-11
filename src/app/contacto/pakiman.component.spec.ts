import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PakimanComponent } from './pakiman.component';

describe('PakimanComponent', () => {
  let component: PakimanComponent;
  let fixture: ComponentFixture<PakimanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PakimanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PakimanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
