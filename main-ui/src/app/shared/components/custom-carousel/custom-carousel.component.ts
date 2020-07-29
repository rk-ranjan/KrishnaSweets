import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { scaleIn, scaleOut } from '../../animations/carousel.animations';

@Component({
  selector: 'app-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.scss'],
  // animations: [
  //   trigger("slideAnimation", [
  //     /* scale */
  //     transition("void => *", [useAnimation(scaleIn, {params: { time: '500ms' }} )]),
  //     transition("* => void", [useAnimation(scaleOut, {params: { time: '500ms' }})]),
  //   ])
  // ]
})
export class CustomCarouselComponent implements OnInit {
  @Input() public slides;
  public currentSlide = 0;
  constructor() { }

  ngOnInit() {
    this.preloadImages();
  }

  public preloadImages() {
    for (const slide of this.slides) {
      new Image().src = slide.src;
    }
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
  }

}
