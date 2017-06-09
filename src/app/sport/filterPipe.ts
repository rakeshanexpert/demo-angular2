import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filter'})

export class FilterPipe implements PipeTransform{
    transform(sportJsonData:any[], filterSearch:any):any{
        if(!filterSearch) return sportJsonData;
            return sportJsonData.filter(function(crickterName:any){
                //console.log(crickterName);
                return crickterName.Name.toLowerCase().includes(filterSearch.toLowerCase())
            })
    }
}