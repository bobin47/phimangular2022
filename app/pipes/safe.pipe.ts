import { DomSanitizer } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
  constructor(private sanz: DomSanitizer) { }

  transform(value: any): any {
    return this.sanz.bypassSecurityTrustResourceUrl(value);
  }

}
