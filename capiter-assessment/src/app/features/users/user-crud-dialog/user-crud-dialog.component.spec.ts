import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { UserCrudDialogComponent } from '../user-crud-dialog/user-crud-dialog.component';

describe('UserCrudDialogComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
              BrowserAnimationsModule,
              RouterTestingModule,
              MatSnackBarModule,
              MatDialogModule,
              HttpClientModule,
              ReactiveFormsModule,
              MatFormFieldModule,
              MatInputModule,
            ],
            declarations: [
                UserCrudDialogComponent
            ],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: {} },
                { provide: MatDialogRef, useValue: {} }
            ]
        }).compileComponents();
    });

    it('should create the component', () => {
        const fixture = TestBed.createComponent(UserCrudDialogComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as loading property initiated as false`, () => {
        const fixture = TestBed.createComponent(UserCrudDialogComponent);
        const component = fixture.componentInstance;
        expect(component.loading).toEqual(false);
    });
    it('should have element', () => {
        const fixture = TestBed.createComponent(UserCrudDialogComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('div .w-100-p'))
            .toBeTruthy();
    });
})