import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  data: any = {};
  constructor(private http:Http){
    this.getValues();
    this.getData();
  }

  getData(){
    return this.http.get('https://08fqotbbsa.execute-api.us-east-1.amazonaws.com/beta')
    .map((res:Response) => res.json());
  }

  getValues(){
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data.Item.description;
    })
  }
}
