import { Component, OnInit } from '@angular/core';
import { FeedbackModel } from './section.model';
import { ServiceService } from '../service.service';
import Typed from 'typed.js';

declare var $:any;

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  hash: string | undefined;

  feedbacks: FeedbackModel[] = [];

  constructor(private service:ServiceService) { }

  ngOnInit(): void {

    this.service.getfeedback().subscribe((data)=>{
      console.log(data);
      this.feedbacks = JSON.parse(JSON.stringify(data));
    });

    // Typed Initiate
    if ($('.hero .hero-text h2').length == 1) {
      var typed_strings = $('.hero .hero-text .typed-text').text();
      var typed = new Typed('.hero .hero-text h2', {
          strings: typed_strings.split(', '),
          typeSpeed: 100,
          backSpeed: 20,
          smartBackspace: false,
          loop: true
      });
  }

  // Skills
  $('.skills').waypoint(()=> {
      $('.progress .progress-bar').each( () => {
          $(this).css("width", $(this).attr("aria-valuenow") + '%');
      });
  }, {offset: '80%'});

  //portfolio
      var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', ()=> {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });

  //testimonials 
    $(".testimonials-carousel").owlCarousel({
      center: true,
      autoplay: true,
      dots: true,
      loop: true,
      responsive: {
          0:{
              items:1
          }
      }
    });





  }

}
