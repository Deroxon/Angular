import {Component} from '@angular/core'

@Component ({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr>
        <div class="well">Hello World </div>
        <event-thumbnail [event]= "event1" > </event-thumbnail>
    </div>
`,


})

export class EventsListComponent{

    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: new Date(),
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            adress: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }

   

    
    
    ngOnInit() {

        /* setTimeouty oraz jak działa callstack przy tym
        debugger
       setTimeout( () => {
        
            this.event1.id = 300
            console.log(this.event1.id)
            
        }, 1000)

        this.event1.id = 5
       
        setTimeout(() => {
            for (let index = 0; index <  10000; index++) {
                console.log(index)
                this.event1.id = 10
             }
             debugger
        } ,0)
        */

    }
   
   

}