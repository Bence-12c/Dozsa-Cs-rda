import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoComponent } from './fo.component';

describe('FoComponent', () => {
  let component: FoComponent;
  let fixture: ComponentFixture<FoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
