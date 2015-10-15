class CountryService {

  constructor($http, config, $q) {
    this.countries = [];
    this.$http = $http;
    this.config = config;
    this.$q = $q;
  }

  getCountries() {
    return this.countries.length ? this.$q.resolve(this.countries) :
    this.$http.get(this.config.apiUrl).then((response) => {
      this.countries = response.data.items;
      return this.countries;
    });
  }

  getCountry(name) {
    return this
            .getCountries()
            .then(countries => countries.find(country => country.name === name));
  }

  getCountryByCountryCode(code) {
    return this
            .getCountries()
            .then(countries => countries.find(country => country.alpha3Code === code));
  }

  getBorderCountries(country) {
    var countryPromises = country.borders.map((countryCode) => {
      return this.getCountryByCountryCode(countryCode);
    });
    return this.$q.all(countryPromises);
  }
}

angular.module('CountryService', [])

.service('CountryService', CountryService);
