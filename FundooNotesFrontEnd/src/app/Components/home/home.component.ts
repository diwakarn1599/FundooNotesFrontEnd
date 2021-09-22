import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  opened: boolean = true;
  list: boolean = true;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  toggleView()
  {
    this.list = !this.list;
  }
  SignOut()
  {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
