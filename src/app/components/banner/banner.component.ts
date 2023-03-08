import { Component, OnInit } from '@angular/core';
import { BannersService } from 'src/app/services/banners.service';
import { Banner } from './banner.model';



@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
  
})
export class BannerComponent  implements OnInit {

  bannerdata : Banner[]=[];

  constructor(private bannerService: BannersService) {
   
 }

 getBanners(): void{
 this.bannerService.getTopBannerItems()
 .subscribe(data => (this.bannerdata=data)
      
   );
 }


  ngOnInit(): void {
    this.getBanners();
  }

}
