import {NgModule} from '@angular/core';
import { PickupCallCardComponent } from './pickup-call-card/pickup-call-card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [PickupCallCardComponent],
    exports: [PickupCallCardComponent],

    imports: [
        CommonModule,
        FormsModule,
        IonicModule
      ],
})

export class ComponentsModule{}