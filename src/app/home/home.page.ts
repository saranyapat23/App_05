import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private detail: NavController) {}

  items=[
    {
      id:1,
      name:'น้องแมว',
      price: 20000,
      details:'น้องแมวเฟี้ยวๆ',
      imageURL: 'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-600x400.jpg',
    },
    {
      id:2,
      name:'น้องแพนด้าแดง',
      price: 250000,
      details:'น้องแพนด้าแดงสุดแรร์ จากประเทศจีน',
      imageURL: 'https://i.natgeofe.com/k/63b1a8a7-0081-493e-8b53-81d01261ab5d/red-panda-full-body_4x3.jpg',
    },
    {
      id:3,
      name:'Product C',
      price: 300,
      details:'this is a product C',
      imageURL: 'https://media.istockphoto.com/id/92254838/photo/ducks-being-guided-through-a-small-wooden-open-gate.jpg?s=612x612&w=0&k=20&c=vgOiukxogtfRDixVJG57a-B3GJ5whg9qm3vyr1NcXq0=',
    },
    {
      id:4,
      name:'Product D',
      price: 350,
      details:'this is a product D',
      imageURL: 'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/shush-ducky-alana-thrower.jpg',
    },

  ]

  gotoDetail(i:any){
    this.detail.navigateForward('/detail',{state:{i}}
    )

  }

}
