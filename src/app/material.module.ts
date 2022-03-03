import { NgModule } from '@angular/core';

import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  exports: [MatBottomSheetModule, MatSnackBarModule, MatButtonModule],
})
export class MaterialModule {}
