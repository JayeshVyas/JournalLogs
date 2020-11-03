import { Component,OnInit  } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClient } from "@angular/common/http";
import { JsonPipe } from '@angular/common';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'DailyJournal';
  products: any = [];
  public searchText: string;


constructor(private httpClient: HttpClient){}
  ngOnInit(){
    this.httpClient.get("assets/data.json").subscribe(data =>{
      //console.log(data);
      this.products = data;
      console.log("sorted=="+this.products);
      this.products = this.products.sort((a, b) => {
      return <any>new Date(b.attributes.CreateStamp) - <any>new Date(a.attributes.CreateStamp);
    });
    })
  }

  openModal(){
   const buttonModal = document.getElementById("openModalButton") as HTMLInputElement;
   console.log('buttonModal', buttonModal)
   buttonModal.click()
 }


}
