import { request } from 'ice';

export default {
    async userLogin(username, password) {
        return await request({
            url: '/papi/oauth?login_type=1',
            method: 'POST',
            data: {
                username,
                password
            }
        })
    },
    userLogout(callBack) {
        request({
            url: '/papi/logout',
            method: 'POST',
        }).catch(error => {
            console.log('logout failed : ', error)
        }).finally(callBack)
    }
}