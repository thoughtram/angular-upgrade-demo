import {Component} from 'angular2/angular2';

@Component({
  selector: 'country-list-card',
  inputs: ['country'],
  template: `
    <div class="mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">{{country.name}} ({{country.nativeName}})</h2>
      </div>
      <div class="mdl-card__supporting-text">
        <p>{{country.name}} is a country in {{country.subregion}}. It has a population of {{country.population}} people and adjoins {{country.borders.length}} border countries.</p>
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <a href="#/country/{{country.name}}" class="mdl-button mdl-button--colored">Learn more</a>
      </div>
    </div>
  `
})
export class CountryListCard {

}
