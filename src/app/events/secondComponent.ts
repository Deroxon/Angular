import {Component} from "@angular/core";

@Component ({
    selector: 'sec-comp',
    templateUrl: 'secondComponent.html'
})

export class secComp {


    data = {
        name: 'Daniel',
        age: 23,
        hobby: 'Programming',
        alergic: {
          vegetables: true,
          fruit: false,
          cats: true
        }
      }

     

}