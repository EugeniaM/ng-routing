import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  navigateToLessons() {
    // ..requests to server or calculations
    this.router.navigate(['/lessons']);
  }

  navigateToLessonEdit() {
    this.router.navigate(['/lessons', 1, 'edit'],
      {queryParams: {allowEdit: '1'}});
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

}
