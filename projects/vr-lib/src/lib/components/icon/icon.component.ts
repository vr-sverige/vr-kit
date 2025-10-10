import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
	selector: 'vr-kit-icon',
	imports: [CommonModule, MatTooltipModule],
	template: `<div
		[ngStyle]="{
			width: processedWidth(size),
			height: processedHeight(size),
			'background-color': processedColor,
			'-webkit-mask': mask,
			'-webkit-mask-size': 'contain',
			mask: mask,
			transform: processRotate,
		}"
		[matTooltip]="tooltipText ? tooltipText : ''"
		matTooltipPosition="above"
		(click)="onClick.emit($event)"></div>`,
})
export class VrKitIconComponent {
	@Input()
	path!: string;

	@Input()
	color?: string;

	@Input()
	colorKey?: string;

	@Input()
	// "size" || "width height"
	size!: string;

	@Input() rotate: number = 0;

	@Input()
	tooltipText?: string;

	@Output()
	onClick = new EventEmitter<Event>();

	public get processRotate(): string {
		return `rotate(${this.rotate}deg)`;
	}

	public get mask(): string {
		return `url(${this.path}) 0 0 / contain no-repeat`;
	}

	public get processedColor(): string {
		if (this.color) {
			return this.color;
		} else if (this.colorKey) {
			const docStyle = getComputedStyle(document.body);
			const variable = docStyle.getPropertyValue(this.colorKey);
			return variable
				? variable
				: getComputedStyle(document.querySelector('#storywrapper')!).getPropertyValue(this.colorKey);
		}

		return '#000000';
	}

	public processedWidth(inputedSize: string): string {
		if (inputedSize) {
			const sizes = inputedSize.split(' ');
			switch (sizes.length) {
				case 2: {
					return sizes[0];
				}
				default: {
					return inputedSize;
				}
			}
		}

		return inputedSize;
	}

	public processedHeight(inputedSize: string): string {
		if (inputedSize) {
			const sizes = inputedSize.split(' ');
			switch (sizes.length) {
				case 2: {
					return sizes[1];
				}
				default: {
					return inputedSize;
				}
			}
		}

		return inputedSize;
	}
}
