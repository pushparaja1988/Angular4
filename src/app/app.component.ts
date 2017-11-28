import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  heroes = ['Push','vasanth','yuvan'];
  visible = false;
  result = 2;
  username = 'Pushparaja'
  constructor(){
    setTimeout(() => {
      this.result= 50;
    }, 3000);
  }

  toggleH3()
  {
    this.visible = !this.visible;
  }

  myFunction(event){
    console.log("some key events happend.."+event.target.value);
  }
  mySkills = [
    {'name': 'html','type':'FrontEnd'},
    {'name': 'css','type':'FrontEnd'},
    {'name': 'js','type':'FrontEnd'},
    {'name': 'ruby','type':'BackEnd'},
  ]
  myFavLang = {
    'frontEnd' : ['html','css','javascript'],
    'backEnd' : ['nodejs','php','ruby','python']
  } 
}
