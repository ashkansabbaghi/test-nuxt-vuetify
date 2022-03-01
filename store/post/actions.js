import api from 'axios'
URL = 'https://picsum.photos/v2/list'


export default {

  getImage({
    commit
  }) {
    api.get(`${URL}`)
      .then(res => {
        console.log(res)
        if (res.status === 200) {
          commit('setImage', res.data)
        }
      })
  },
}
