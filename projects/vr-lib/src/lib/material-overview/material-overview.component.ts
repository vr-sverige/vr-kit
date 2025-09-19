import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatChipsModule} from '@angular/material/chips';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'lib-material-overview',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCheckboxModule,
    MatRadioModule,
    MatChipsModule,
    MatTabsModule,
],
  templateUrl: './material-overview.component.html',
  styleUrls: ['./material-overview.component.css']
})
export class MaterialOverviewComponent {

}
