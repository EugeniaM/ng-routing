import {NgModule} from '@angular/core';
import {SuperPipe} from './super.pipe';

@NgModule({
  declarations: [
    SuperPipe
  ],
  exports: [
    SuperPipe
  ]
})
export class SharedModule {}
