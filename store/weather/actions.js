import api from 'axios'
// const ApiKey = 'c1e51ca18d8b7ca603f77387d9076fbc'
// const limit = 2
export default {

  getWeather({
    commit
  }, info) {
    console.log(info)
    api.get(`https://api.openweathermap.org/data/2.5/weather?lat=${info.lat}&lon=${info.lon}&appid=${process.env.weatherAppId}`)
      .then(res => {
        console.log(res)
        if (res.status === 200) {
          commit('setWeather', res.data)
        }
      })
  },

  getCity({
    commit
  }, city) {
    console.log('getCity')
    api.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${process.env.weatherAppId}`)
      .then(res => {
        console.log(res.data)
        commit('setCity', res.data)
      })
  }
}
