/**
 * Created by Maoz on 2/28/2017.
 */

import {Component} from 'angular2/core'
import {AuthorService} from '../services/author.service'
import {MaozMethodDirective} from "../directives/maoz-method.directive";

@Component({
    selector:'authors',
    template:`
        <h2 maoz>Authors</h2>
        {{title}}
        <ul>
            <li *ngFor="#author of authors">{{author}}</li>
        </ul>
        `,
    providers:[AuthorService],
    directives:[MaozMethodDirective]
})

export class AuthorsComponent{
    title: string = "The title of the authors page";
    authors;
    constructor(authorService: AuthorService){
        this.authors=authorService.getAuthors();
    }
}