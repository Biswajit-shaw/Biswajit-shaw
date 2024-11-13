import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from "./first/first.component";
import { AboutComponent } from "./about/about.component";
import { ServicesComponent } from "./services/services.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponent, AboutComponent, ServicesComponent, PortfolioComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  
  title = 'portfolio';
  ngOnInit() {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '30px',
      duration: 1000,
      delay: 200,
      reset: true
    });

    sr.reveal('.home-content, .home-img', { delay: 300 });
    sr.reveal('.heading, .about, .services, .resume, .contact', { delay: 200 });
    sr.reveal('.services-box, .resume-box', { interval: 200 });

    sr.reveal('.about-img', { origin: 'left', distance: '50px', duration: 1200 });
    sr.reveal('.about-content', { origin: 'right', distance: '50px', duration: 1200 });
    sr.reveal('.contact-info, .contact-form', { origin: 'bottom', distance: '30px', duration: 1200 });
  }
}
