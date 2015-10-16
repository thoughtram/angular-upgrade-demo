import {Pipe, PipeTransform} from 'angular2/angular2';

@Pipe({name: 'join', pure: false})
export class JoinPipe implements PipeTransform {
  transform(value: Array<string>): string {
    return value.join(',');
  }
}
