import { Component, Input } from '@angular/core';
import { VrKitIconComponent } from '../icon/icon.component';

@Component({
	selector: 'vr-kit-no-data',
	styleUrls: ['./no-data.scss'],
	imports: [VrKitIconComponent],
	templateUrl: './no-data.component.html',
})
export class VrKitNoDataComponent {

	@Input()
	label = 'No data to display';

	@Input()
	subLabel?: string;

	pathToIcon = '/assets/icons/ico_no_data.svg';

	public get classes(): string[] {
		return ['vr-kit-no-data'];
	}
}
