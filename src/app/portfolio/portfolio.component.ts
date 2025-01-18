import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  images:string[]=["./portfolio/poert1.png" , "./portfolio/port2.png" , "./portfolio/port3.png" , "./portfolio/poert1.png" , "./portfolio/port2.png" , "./portfolio/port3.png"];

  imageSrc:string="";
  @ViewChild('layoutt') layoutt!:ElementRef;

  showimg(imagesrc:string):void{
    this.imageSrc = imagesrc;
    // بقولة لما ادوس تشيل الكلاس ده علشان يعرض الديف اللي هيعرض الصورة
    this.layoutt.nativeElement.classList.remove('d-none');
  };

  // بقفل اللاي اوت
  closeLayout():void{
    this.layoutt.nativeElement.classList.add('d-none');
  };


}
