import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {AngularFirestore} from '@angular/fire/firestore';
import {en_US, NgZorroAntdModule, NZ_I18N} from 'ng-zorro-antd';

@NgModule({
  declarations: [],
  imports: [
    NgZorroAntdModule,

  ],
  exports: [
    NgZorroAntdModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        { provide: NZ_I18N, useValue: en_US }
      ]
    };
  }
}
