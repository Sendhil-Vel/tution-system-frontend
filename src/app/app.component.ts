import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
  appName: string;

  constructor(
    private router: Router,
    private titleService: Title,
    private route: ActivatedRoute
  ) {
    this.appName = "Vojvoj Admin";
  }

  ngOnInit(): void {
    // Setting dynamic page title
    this.router.events
    .pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => {
        const child: ActivatedRoute | null = this.route.firstChild;
        let title = child && child.snapshot.data['title'];
        if(title) {
          return title;
        }
      })
    )
    .subscribe((title) => {
      if(title) {
        this.titleService.setTitle(`${title} - ${this.appName}`)
      }
    });
  }

}
