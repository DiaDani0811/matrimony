import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private router: Router,
    private storageService: StorageService,
  ) { }

  ngOnInit() {
    this.getProfileData();
  }

  getProfileData() {
    this.storageService.storeProfileData();
  }

  toPage(page: string) {
    this.router.navigate([page]);
  }
}
