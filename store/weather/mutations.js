export default {
  setWeather(state, weather) {
    state.weather = weather;
  },
  setCity(state, city) {
    state.city = city;
  },
  reCity(state) {
    console.log('remove city')
    state.city = '';
  }
}
