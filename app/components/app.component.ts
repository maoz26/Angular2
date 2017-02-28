/**
 * Created by Maoz on 2/28/2017.
 */
import {Component} from 'angular2/core';
import {CoursesComponent} from "./courses.component";
import {AuthorsComponent} from "./author.compnent";

@Component({
    selector: 'maozHeadline',
    template: `<h1>My First Angular 2 App</h1>
               <courses></courses>
               <authors></authors>`,
    directives: [CoursesComponent,AuthorsComponent]
})

export class AppComponent {}