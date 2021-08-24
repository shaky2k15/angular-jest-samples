import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import UserDetails from './data';
import { MatTableModule } from '@angular/material/table';

let testUsers = UserDetails;

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableComponent ],
      imports: [ MatTableModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


it('should test rows of he Ang Mat table ', (done) => {
  expect(component.users).toEqual(testUsers);

  fixture.whenStable().then(() => {
    fixture.detectChanges();

    let tableRows = fixture.nativeElement.querySelectorAll('tr');
    expect(tableRows.length).toBe(5);

    // Header row
    let headerRow = tableRows[0];
    expect(headerRow.cells[0].innerHTML).toBe('Email');
    expect(headerRow.cells[1].innerHTML).toBe('Created');
    expect(headerRow.cells[2].innerHTML).toBe('Roles');

    // Data rows
    let row1 = tableRows[1];
    expect(row1.cells[0].innerHTML).toBe('ajay43@mail.com');
    console.log(row1);
    expect(row1.cells[1].innerHTML).toBe('01-01-2021');
    expect(row1.cells[2].innerHTML).toBe('admin, standard');

    let row2 = tableRows[2];
    expect(row2.cells[0].innerHTML).toBe('ravi-tr@gmail.com');
    expect(row2.cells[1].innerHTML).toBe('07-05-2020');
    expect(row2.cells[2].innerHTML).toBe('admin');

    let row3 = tableRows[3];
    expect(row3.cells[0].innerHTML).toBe('raj655@mail.com');
    expect(row3.cells[1].innerHTML).toBe('04-01-2019');
    expect(row3.cells[2].innerHTML).toBe('standard');

    done();
  });
});

});
