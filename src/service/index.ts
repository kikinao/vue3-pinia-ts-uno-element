const moudle = import.meta.glob('/src/testApi/**.json')

/**
 * 模拟获取接口数据
 * @param name 数据参数
 * name可选为=> router
 */
export function getData(name: string) {
  const data = {}
  const loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  return new Promise((resolve) => {
    setTimeout(() => {
      Object.assign(data, moudle[`/src/testApi/${name}.json`])
      resolve(data)
      loading.close()
    }, 2000)
  })
}

export function login(data: any) {
  const loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (data.name === 'admin' && data.password === '123456') {
          resolve({
            code: 200,
            data: {
              access_token: '111',
              expires_in: 3600,
              refresh_token: '1234567890',
              token_type: 'admin'
            }
          })
        } else {
          reject({
            code: 500,
            data: null,
            msg: '账号或密码错误'
          })
        }
        loading.close()
      }, 2000
    )
  })
}
