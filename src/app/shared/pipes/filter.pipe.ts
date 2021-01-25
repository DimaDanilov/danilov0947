import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], select: number, check_status: boolean): any {
    if (items!=undefined)
      if ((select!=null)&&(select!=-1)&&(select!=undefined)){
        if (select==0){
          let category_items = items.filter(item => item.category == 0);
          if (check_status==true)
            return category_items.filter(item => item.amount > 0);
          else
            return category_items;
        }
        if (select==1){
          let category_items = items.filter(item => item.category == 1);
          if (check_status==true)
            return category_items.filter(item => item.amount > 0);
          else
            return category_items;
        }
        if (select==2){
          let category_items = items.filter(item => item.category == 2);
          if (check_status==true)
            return category_items.filter(item => item.amount > 0);
          else
            return category_items;
        }
        if (select==3){
          let category_items = items.filter(item => item.category == 3);
          if (check_status==true)
            return category_items.filter(item => item.amount > 0);
          else
            return category_items;
        }
      }
      else if (check_status==true)
        return items.filter(item => item.amount > 0);
      else
        return items;
  }

}
