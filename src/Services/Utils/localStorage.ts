type Key = string

type Value = string

function safeGetStorage() {
  if (typeof localStorage === 'undefined') return null

  return localStorage
}

function safeGetItem(key: Key) {
  if (typeof localStorage === 'undefined') return null

  return localStorage.getItem(key)
}

function safeSetItem(key: Key, value: Value) {
  if (typeof localStorage === 'undefined') return

  localStorage.setItem(key, value)
}

function safeRemoveItem(key: Key) {
  if (typeof localStorage === 'undefined') return

  localStorage.removeItem(key)
}

export default { safeGetStorage, safeGetItem, safeSetItem, safeRemoveItem }
