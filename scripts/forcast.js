class Forecast {
  constructor() {
    this.key = "GI9n14hbnZdn1AUhi3eIGxEhTedUeMO2";
    this.weatherURI =
      "https://dataservice.accuweather.com/currentconditions/v1/";
    this.cityURI =
      "https://dataservice.accuweather.com/locations/v1/cities/search";
  }

  async updateCity(city) {
    const cityDets = await this.getCity(city);
    const weather = await this.getWeather(cityDets.Key);

    return {
      cityDets,
      weather,
    };
  }

  async getCity(city) {
    // Takes a string and returns an object
    const query = `?apikey=${this.key}&q=${city}`;
    const response = await fetch(this.cityURI + query);
    const data = await response.json();
    return data[0]; // Return the first city that matches the search term
  }

  async getWeather(id) {
    const query = `${id}?apikey=${this.key}`;
    const response = await fetch(this.weatherURI + query);
    const data = await response.json();
    return data[0];
  }
}

// const key = "GI9n14hbnZdn1AUhi3eIGxEhTedUeMO2";

// Get Weather Information
// const getWeather = async (id) => {
// const base = "https://dataservice.accuweather.com/currentconditions/v1/";
// const query = `${id}?apikey=${key}`;
// const response = await fetch(base + query);
// const data = await response.json();
// return data[0];
// };

//  Get city Information
// const getCity = async (city) => {
// const base = "https://dataservice.accuweather.com/locations/v1/cities/search";
// const query = `?apikey=${key}&q=${city}`;
// const response = await fetch(base + query);
// const data = await response.json();
// return data[0]; // Return the first city that matches the search term
// };
