import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-my-matches',
  templateUrl: './pending-section.component.html',
  styleUrls: ['./pending-section.component.scss'],
})
export class PendingSection implements OnInit {

  public profiles = [];

  sliderConfig = {
    centeredSlides: true
  };

  constructor(
    private router: Router,
    private storage: StorageService,
  ) { }

  async ngOnInit() {
    this.profiles = await this.storage.getProfileData();
  }

  toProfile(profileId: number) {
    const params: NavigationExtras = {
      queryParams: { profileId }
    };
    this.router.navigate(['/profile'], params);
  }

}
