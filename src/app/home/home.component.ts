import { Component, OnInit, ViewChild ,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() myAwesomeValue;
  @ViewChild ('inputText') txtBoxValue;
  name = '';
  constructor(private route : ActivatedRoute) {
      setInterval(()=> { this.send2server()},500);
   }
  ngOnInit() 
  {
    this.name = this.route.snapshot.params.name;
    console.log(this.route.snapshot.params);
   console.log(this.myAwesomeValue);
  }
  send2server()
  {
    let data = this.txtBoxValue.nativeElement;
    console.log(data.value);
  }

}
