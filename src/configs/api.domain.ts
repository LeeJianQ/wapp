interface Apis {
  wg?: string
}

const devs = {
  wg: 'https://wg_dev.baiee.cn'
}

const tests = {
  wg: 'https://wgtest.baiee.cn'
}

const prods = {
  wg: 'https://wg.baiee.cn'
}

export let apis: Apis = {}

if (import.meta.env.MODE === 'dev') {
  apis = devs
} else if (import.meta.env.MODE === 'test') {
  apis = tests
} else {
  apis = prods
}