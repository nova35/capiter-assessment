import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersListComponent } from '../users-list/users-list.component';

describe('UsersListComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
              BrowserAnimationsModule,
              RouterTestingModule,
              MatSnackBarModule,
              HttpClientModule,
              ReactiveFormsModule,
              MatFormFieldModule,
              MatInputModule,
            ],
            declarations: [
                UsersListComponent
            ],
            providers: [
                { provide: MatDialog, useValue: {} }
            ]
        }).compileComponents();
    });

    it('should create the component', () => {
        const fixture = TestBed.createComponent(UsersListComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'Sign up'`, () => {
        const fixture = TestBed.createComponent(UsersListComponent);
        const component = fixture.componentInstance;
        expect(component.currentPage).toEqual(1);
    });
    it('should render title', () => {
        const fixture = TestBed.createComponent(UsersListComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('div .fs-4')?.textContent)
            .toContain('Users List');
    });
})