import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCompoComponent } from './simple-compo.component';

describe('SimpleCompoComponent', () => {
  let component: SimpleCompoComponent;
  let fixture: ComponentFixture<SimpleCompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleCompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
