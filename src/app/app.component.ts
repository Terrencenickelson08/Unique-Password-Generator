import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  changedLetter = false;
  changedNumber = false;
  changedSymbol = false;
  password = '';

  onChangeLetter(){
    this.changedLetter = true;
  }

  onChangeNumber(){
    this.changedNumber = true;
  }

  onChangeSymbol(){
    this.changedSymbol = true;
  }

  onButtonClick(){
    const numbers = '1234567879';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*';

    let validChars = '';
    if(this.changedLetter){
      validChars += letters;
    }

    if(this.changedNumber){
      validChars += numbers;
    }

    if(this.changedSymbol){
      validChars += symbols;
    }

    let generatedPassword= '';
    for(let i = 0; i < this.length; i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;

  }

  onChangeLength(event: Event){
    const target = event.target as HTMLInputElement;
    const parsedValue = parseInt(target.value);

    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }
  }
}
