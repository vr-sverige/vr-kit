import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';


@Component({
  selector: 'lib-material-overview',
  imports: [MatButtonModule, MatIconModule, MatDividerModule],
  templateUrl: './material-overview.component.html',
  styleUrl: './material-overview.component.css'
})
export class MaterialOverviewComponent {

}
