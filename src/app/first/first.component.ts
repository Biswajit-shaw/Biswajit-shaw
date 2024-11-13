import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'] // Fix the typo here (styleUrl -> styleUrls)
})
export class FirstComponent implements OnInit {

  @ViewChild('multipleText', { static: true }) multipleTextElement!: ElementRef;
  // constructor(private ScrollReveal: scrollReveal) { }

  menuIcon!: HTMLElement | null;
  navbar!: HTMLElement | null;
  sections!: NodeListOf<HTMLElement>;
  navLinks!: NodeListOf<HTMLAnchorElement>;

  ngOnInit(): void {
    this.sections = document.querySelectorAll('section') as NodeListOf<HTMLElement>;
    this.navLinks = document.querySelectorAll('header nav a') as NodeListOf<HTMLAnchorElement>;
    this.menuIcon = document.querySelector('#menu-icon');
    this.navbar = document.querySelector('.navbar');

    const options = {
      strings: ['Frontend Developer', 'Web Developer', 'Software Designer'],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 1000,
      loop: true
    };

    const typed = new Typed(this.multipleTextElement.nativeElement, options);

    if (this.menuIcon && this.navbar) {
      this.menuIcon.addEventListener('click', () => {
        this.toggleNavbarOnClick();
      });
    }

    this.navLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.closeNavbar();
      });
    });
  }

  toggleNavbarOnClick(): void {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon?.addEventListener('click', () => {
      menuIcon.classList.toggle('fa-xmark');
      navbar?.classList.toggle('active');
    });
  }
  

  closeNavbar(): void {
    if (this.menuIcon && this.navbar) {
      this.menuIcon.classList.remove('fa-xmark');
      this.navbar.classList.remove('active');
    }
  }

  initScrollReveal() {
    ScrollReveal().reveal('.home-content', {
        origin: 'top',
        distance: '80px',
        duration: 2000,
        delay: 500
    });
}

  // @HostListener('window:scroll', [])
//   onWindowScroll(): void {
//     const top = window.scrollY;

//     this.sections.forEach(sec => {
//       const offset = sec.offsetTop - 150;
//       const height = sec.offsetHeight;
//       const id = sec.getAttribute('id');

//       if (top >= offset && top < offset + height) {
//         this.navLinks.forEach(link => {
//           link.classList.remove('active');
//         });
//         const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
//         if (activeLink) {
//           activeLink.classList.add('active');
//         }
//       }
//     });
//   }

//   @HostListener('window:resize', [])
//   onWindowResize(): void {
//     if (window.innerWidth > 768 && this.navbar && this.navbar.classList.contains('active')) {
//       this.navbar.classList.remove('active');
//       if (this.menuIcon) {
//         this.menuIcon.classList.remove('fa-xmark');
//       }
//     }
//   }

// ScrollReveal({
//   distance: '80px',
//     duration:2000,
//     delay: 200,

// })

// ScrollReveal().reveal('.home-content', { delay: 500});
}
