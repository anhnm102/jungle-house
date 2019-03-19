import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';

import { ShellComponent } from './shell.component';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  imports: [CommonModule, TranslateModule, FlexLayoutModule, MaterialModule, RouterModule, OverlayModule],
  declarations: [ShellComponent]
})
export class ShellModule {}