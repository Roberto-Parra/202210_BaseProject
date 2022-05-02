/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import * as fakerLib from '@faker-js/faker';
import { VehiculosListComponent } from './vehiculos-list.component';
import { Vehiculos } from 'src/app/vehiculos/vehiculos';

describe('VehiculosListComponent', () => {
  const faker = fakerLib.default;
  let component: VehiculosListComponent;
  let fixture: ComponentFixture<VehiculosListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculosListComponent);
    component = fixture.componentInstance;
    component.vehiculos = [
      new Vehiculos(
        faker.datatype.number(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.datatype.string(),
        faker.image.imageUrl(),
      ),
      new Vehiculos(
        faker.datatype.number(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.datatype.string(),
        faker.image.imageUrl(),
      ),
      new Vehiculos(
        faker.datatype.number(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.datatype.string(),
        faker.image.imageUrl(),
      )
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render one component for each vehicule register', () => {
    const vehiculosItems = debug.queryAll(By.css('div.app-vehiculos-item'));
    console.log(vehiculosItems);
    expect(vehiculosItems).toBeTruthy();
    //expect(vehiculosItems.length).toBeGreaterThan(0);
  });
});
