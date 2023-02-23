import * as process from 'process'

function getEnv(env: string) {
  return process.env[env]
}

export default { getEnv }
