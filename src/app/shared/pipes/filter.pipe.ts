import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], select: number): any {
    if ((select!=null)&&(select!=-1)){
      if (select==0)
        return items.filter(item => item.category == 0);
      if (select==1)
        return items.filter(item => item.category == 1);
      if (select==2)
        return items.filter(item => item.category == 2);
      if (select==3)
        return items.filter(item => item.category == 3);
    }
    else
      return items;
  }

}
