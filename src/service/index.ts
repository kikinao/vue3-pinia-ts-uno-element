const moudle = import.meta.glob('/src/testApi/**.json')

/**
 * 模拟获取接口数据
 * @param name 数据参数
 * name可选为=> router
 */
export function getData(name: string) {
  const data = {}
  return new Promise((resolve) => {
    setTimeout(() => {
      Object.assign(data, moudle[`/src/testApi/${name}.json`])
      resolve(data)
    }, 2000)
  })
}
