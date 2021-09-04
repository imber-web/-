//暂未使用、需要后端返回能操作的相应菜单时使用
import { request } from 'ice';

export default {
    async getUserInfo() {
        return await request({
            url: '/papi/v1/user/current'
        })
    },

    async getUserPermission() {
        return await request('/papi/v1/menu/user/permission')
            .then((result: any[]) => {
                const obj = {}
                if (!result) {
                    return obj
                }
                for (let i = 0; i < result.length; i += 1) {
                    obj[`${result[i]}`] = true
                }
                return obj
            })
    }

}