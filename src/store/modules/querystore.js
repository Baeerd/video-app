import { queryApi } from '../../api/api'

const state = {
}

const mutations = {
}

const actions = {
  async findAirStation({ commit }, reqParams) {
    const res = await queryApi("/fem-md-equipment/findAirStation",reqParams)
    try {
      if(res.retDesc === '操作成功!') {
        console.log(res.rspBody)

      } else {

      }
    } catch(error) {

    }
    // return pmData
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
