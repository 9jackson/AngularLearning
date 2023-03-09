import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { BannersService } from 'src/app/services/banners.service';
import { Banner } from '../home/home.model';




@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
  
})
export class BannerComponent  implements OnInit, AfterViewChecked {

  bannerdata : Banner[]=[];
  slideIndex = 0;

  constructor(private bannerService: BannersService) {
   
 }

 getBanners(): void{
 this.bannerService.getTopBannerItems()
 .subscribe (data => (this.bannerdata=data)  );
 //Only will get executed if we subscribe
   
 }


  ngOnInit(): void {
    this.getBanners();

   
    

  }
  ngAfterViewChecked(): void{
    this.showSlides(this.slideIndex);
  }

  showSlides(n:number) {
    let i;
    let slides:any = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {this.slideIndex = 1}
    if (n < 1) {this.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex-1].style.display = "block";
    dots[this.slideIndex-1].className += " active";
  }
  

  
// Next/previous controls
plusSlides(n:number) {
  this.showSlides(this.slideIndex += n);
}

// Thumbnail image controls
currentSlide(n:number) {
  this.showSlides(this.slideIndex = n);
}



}





