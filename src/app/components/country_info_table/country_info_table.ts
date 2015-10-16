import {JoinPipe} from '../../common/join_pipe';
import {Component} from 'angular2/angular2';

@Component({
  selector: 'country-info-table',
  inputs: ['country'],
  pipes: [JoinPipe],
  template: `
<table class="mdl-data-table mdl-data-table--selectable mdl-shadow--2dp">
  <tbody>
    <tr>
      <td class="mdl-data-table__cell--non-numeric"><strong>Region</strong>:</td>
      <td>{{country.region}}</td>
    </tr>
    <tr>
      <td class="mdl-data-table__cell--non-numeric"><strong>Subregion</strong>:</td>
      <td>{{country.subregion}}</td>
    </tr>
    <tr>
      <td class="mdl-data-table__cell--non-numeric"><strong>Population</strong>:</td>
      <td>{{country.population}}</td>
    </tr>
    <tr>
      <td class="mdl-data-table__cell--non-numeric"><strong>Captial</strong>:</td>
      <td>{{country.capital}}</td>
    </tr>
    <tr>
      <td class="mdl-data-table__cell--non-numeric"><strong>Currencies</strong>:</td>
      <td>{{country.currencies | join}}</td>
    </tr>
    <tr>
      <td class="mdl-data-table__cell--non-numeric"><strong>Timezones</strong>:</td>
      <td>{{ (country.timezones | join) || 'Not available'}}</td>
    </tr>
  </tbody>
</table>
  `
})
export class CountryInfoTable {

}
