import { Component, Input, Output, EventEmitter} from "@angular/core"


@Component ({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        ID: {{event.id}}
        <h2>{{event.name}} </h2>
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: $\{{event.price}} </div>
        <div>
            <span> Location: {{event.location.adress}} </span>
            <span>&nbsp; </span>
            <span> {{event.location.city}}, {{event.location.country}} </span>
        </div>
        <button class="btn btn-primary" (click)="addCouter()" > Click me! </button>
        Count: {{count}}
    </div>
         `
})

export class EventThumbnailComponent {
    @Input() event: any
    count = 0
    @Output() counter = new EventEmitter<number>()


   

    addCouter() {
        this.count++
        this.counter.emit(this.count)
    }


}