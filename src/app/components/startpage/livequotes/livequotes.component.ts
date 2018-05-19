import {Component, OnInit} from "@angular/core";
import {LiveQuotesService} from "../../../services/api/livequotes.service";
import {LiveQuotes} from "../../../model/model.livequotes";

@Component({
  selector: 'free-quotes',
  styleUrls: ['livequotes.css'],
  templateUrl: 'livequotes.component.html',
})


export class LiveQuotesStartPage implements OnInit{

  _livequotesArray: LiveQuotes[]=[];

  constructor (private livequoteservice: LiveQuotesService) { }

  getQuotes() :void {
    this.livequoteservice.getLiveQuotes().subscribe(data => this._livequotesArray=data);
  }

  ngOnInit(): void {
    this.getQuotes();
  }

}
