import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(items: any[], lastsort: number, sortType: number): any {
    if (items!=undefined)

    //Дефолтная сортировка
      if (lastsort==-1){
        return items.sort(function(a, b) { 
          return a.id - b.id;
        });
      }
      //Сортировка при нажатии
      else {
        if (sortType==0)
          if (lastsort!=0){
            return items.sort(function(a, b) { 
              return a.price - b.price;
            });
          }
          else {
            return items.sort(function(a, b) { 
              return b.price - a.price;
            });
          }
        else 
          if (lastsort!=2){
            return items.sort(function(a, b) {          
              return a.amount - b.amount;
            });
          }
          else {
            return items.sort(function(a, b) {
              return b.amount - a.amount;
            });
          }
      }
  }

}