import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any {

try {
            //alert();    
            if(!items) return [];
            if(!searchText) return items;
        searchText = searchText.toLowerCase();
        return items.filter( it => {
             //console.log("hello jayesh vyas angular 8"+it.attributes.Indent);
              return  (it.attributes.User!=null ? it.attributes.User.toLowerCase().includes(searchText) : '') 
                    || (it.attributes.JournalName!=null ? it.attributes.JournalName.toLowerCase().includes(searchText) : '')
                    || (it.attributes.CreateStamp!=null ? it.attributes.CreateStamp.toLowerCase().includes(searchText) : '');
            });
           
        } catch (error) {
            
        }  }

}
