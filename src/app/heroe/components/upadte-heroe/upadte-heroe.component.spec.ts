import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpadteHeroeComponent } from './upadte-heroe.component';

describe('UpadteHeroeComponent', () => {
  let component: UpadteHeroeComponent;
  let fixture: ComponentFixture<UpadteHeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpadteHeroeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpadteHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
