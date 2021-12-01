import { Component, Inject, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  hash: string | undefined;

  constructor() { }

  ngOnInit(): void {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(() => {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    
    // Initiate the wowjs
    // new WOW().init();
    


    // Sticky Navbar
    $(window).scroll(()=> {
        if ($(this).scrollTop() > 0) {
            $('.navbar').removeClass('nav-sticky');
        } else {
            $('.navbar').addClass('nav-sticky');
        }
    });
    
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', (event:any)=> {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
  }

}
