import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-rk-model',
  templateUrl: './rk-model.component.html',
  styleUrls: ['./rk-model.component.scss']
})
export class RkModelComponent implements OnInit {

  constructor(private el: ElementRef) { }
  ngOnInit() {
      // we added this so that when the backdrop is clicked the modal is closed.
      this.el.nativeElement.addEventListener('click', ()=> {
          this.close()
      })
      var v = [1, 1, 1, 3, 3, 6, 1];
      this.checkPairs(v);
  }
  close() {
      this.el.nativeElement.classList.remove('sshow')
      this.el.nativeElement.classList.add('hhidden')
  }
  private checkPairs(arr: number[]) {
      var checkedArray: number[] = [];
      var mainCount: number = 0;
      for(var i = 0; i < arr.length-1; i++) {
          if(checkedArray.indexOf(arr[i]) === -1) {
             var tempCount: number = 0;
             for(var j = i ; j< arr.length ; j++) {
               if(arr[i] == arr[j]) {
                   tempCount = tempCount + 1;
               }
             }
             console.log(arr[i]+" "+tempCount);
             checkedArray = [...checkedArray, arr[i]];
             mainCount = mainCount  + Math.floor(tempCount / 2);
          }
      }
      console.log(mainCount);
      console.log(checkedArray);
  }

}
