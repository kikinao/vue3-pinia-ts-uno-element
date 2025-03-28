class LocalStore {
  key: string

  constructor(key: string) {
    this.key = key
  }

  getValue() {
    const data: string | null = window.localStorage.getItem(this.key)
    return data ? JSON.parse(data) : null
  }

  setValue(data: unknown) {
    return window.localStorage.setItem(this.key, JSON.stringify(data))
  }

  removeValue() {
    return window.localStorage.removeItem(this.key)
  }
}

export default LocalStore
