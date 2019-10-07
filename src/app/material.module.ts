import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatInputModule,
  MatSelectModule,
  MatSidenavModule,
  MatButtonToggleModule,
  MatIconModule,
  MatListModule
} from '@angular/material';

@NgModule({
  imports: [
      MatButtonModule,
      MatCardModule,
      MatToolbarModule,
      MatInputModule,
      MatSelectModule,
      MatSidenavModule,
      MatButtonToggleModule,
      MatIconModule,
      MatListModule
  ],
  exports: [
      MatButtonModule,
      MatCardModule,
      MatToolbarModule,
      MatInputModule,
      MatSelectModule,
      MatSidenavModule,
      MatButtonToggleModule,
      MatIconModule,
      MatListModule
  ]
})
export class MaterialModule {}
