import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ThemeService, NIGHT_THEME } from '../../services/theme.service';

export interface NavigationItem {
  route: string;
  name: string;
  isActive: boolean;
}

export interface UserInfoModel {
  name: string;
  emailLabel?: string;
  emailContent?: string;
  phoneLabel?: string;
  phoneContent?: string;
  districtLabel?: string;
  districtContent?: string;
  roleLabel?: string;
  roleContent?: string[];
  logoutLabel: string;
}

@Component({
  selector: 'vr-kit-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
  ],
})

export class VrKitHeaderComponent {
  private themeService = inject(ThemeService);

  isNightTheme = () => this.themeService.currentTheme() === NIGHT_THEME;

  toggleTheme() {
    this.themeService.setTheme(this.isNightTheme());
  }

  @Input()
  navigationItems = new Array<NavigationItem>();

  @Input()
  districts = new Array<any>();

  @Input()
  currentDistrictIds!: number[];

  @Input()
  userInfoModel!: UserInfoModel;

  @Input()
  isDistrictSelectorActive: boolean = true;

  @Input()
  isThemeToggleActive: boolean = false;

  @Output()
  onLogoClick = new EventEmitter<boolean>();

  @Output()
  onLogoutClick = new EventEmitter<boolean>();

  @Output()
  onNavigationClick = new EventEmitter<NavigationItem>();

  @Output()
  onDistrictsChanged = new EventEmitter<number[]>();

  constructor() { }

  public districtFormControl = new FormControl();
  public dropdownDistricts = new Array<any>();

  public userInfoOpened = false;
  public hamburgerOpened = false;
  public mobileMenuOpen = false;

  public toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  public closeMobileMenu() {
    this.mobileMenuOpen = false;
  }

  public districtChanged(districts: any[]) {
    const ids = districts.map((district: any) => district.id);
    this.currentDistrictIds = ids;
    this.onDistrictsChanged.emit(ids);
  }

  public getCurrentDistrictName(): string {
    if (this.currentDistrictIds && this.districts) {
      const currentDistrict = this.districts.find(d => d.id === this.currentDistrictIds[0]);
      return currentDistrict ? currentDistrict.name : '';
    }
    return '';
  }

  public logoutClicked() {
    this.onLogoutClick.emit(false);
    this.userInfoOpened = false;
  }

  public isCurrent = (item: any): boolean => {
    if (item === '') {
      const baseUrl = window.location.origin + '/';
      return window.location.href === baseUrl;
    }
    return item !== '' && window.location.href.includes(item);
  }
}
