import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenXeComponent } from './ben-xe.component';

describe('BenXeComponent', () => {
  let component: BenXeComponent;
  let fixture: ComponentFixture<BenXeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenXeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenXeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
