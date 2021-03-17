import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tic-Tac-Toe';
  
  winMsg : string = '';
  arrayItem : string[] = new Array(9).fill('empty');
  isCross = false;
  
  constructor(private toastr: ToastrService) {}

  handleReset(){
   this.winMsg = '';
   this.arrayItem = new Array(9).fill('empty');
   this.isCross = false;
  }

  handleWinMSg(){
    if(this.arrayItem[0] !== 'empty' && this.arrayItem[0] == this.arrayItem[1] && this.arrayItem[0] == this.arrayItem[2]){
      this.winMsg = `${this.arrayItem[0]} is Won`;
    }
    if(this.arrayItem[0] !== 'empty' && this.arrayItem[0] == this.arrayItem[3] && this.arrayItem[0] == this.arrayItem[6]){
     this.winMsg = `${this.arrayItem[0]} is Won`;
    }
    if(this.arrayItem[0] !== 'empty' && this.arrayItem[0] == this.arrayItem[4] && this.arrayItem[0] == this.arrayItem[8]){
     this.winMsg = `${this.arrayItem[0]} is Won`;
    }
    if(this.arrayItem[1] !== 'empty' && this.arrayItem[1] == this.arrayItem[4] && this.arrayItem[1] == this.arrayItem[7]){
      this.winMsg = `${this.arrayItem[1]} is Won`;
    }
    if(this.arrayItem[2] !== 'empty' && this.arrayItem[2] == this.arrayItem[5] && this.arrayItem[2] == this.arrayItem[8]){
     this.winMsg = `${this.arrayItem[2]} is Won`;
    }
    if(this.arrayItem[2] !== 'empty' && this.arrayItem[2] == this.arrayItem[4] && this.arrayItem[2] == this.arrayItem[6]){
      this.winMsg = `${this.arrayItem[2]} is Won`;
    }
    if(this.arrayItem[3] !== 'empty' && this.arrayItem[3] == this.arrayItem[4] && this.arrayItem[3] == this.arrayItem[5]){
      this.winMsg = `${this.arrayItem[3]} is Won`;
    }
    if(this.arrayItem[6] !== 'empty' && this.arrayItem[6] == this.arrayItem[7] && this.arrayItem[6] == this.arrayItem[8]){
      this.winMsg = `${this.arrayItem[2]} is Won`;
    }
  }

  handleClick(itemNum: number){
    if(this.winMsg){
      return this.toastr.success(this.winMsg);
    }

    if(this.arrayItem[itemNum] === 'empty'){
     this.arrayItem[itemNum] = this.isCross ? 'cross' : 'circle';
     this.isCross = !this.isCross;
    }

    else{
     return this.toastr.info('Already Filled');
    }

    return this.handleWinMSg();
  }
}
