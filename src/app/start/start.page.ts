import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartPage implements OnInit {

  public homeimg: Object;
  
  constructor(private authService: AuthService) { 
    this.homeimg = { src: './../../assets/img/communiti_home.jpg', text: 'a picture of a cat' };
  }

  ngOnInit() {
  }

}
