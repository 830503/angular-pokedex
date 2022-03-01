import { NgModule } from '@angular/core';

import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  exports: [MatBottomSheetModule, MatSnackBarModule],
})
export class MaterialModule {}
