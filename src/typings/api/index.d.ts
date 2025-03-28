export interface Result<T = any> {
  data: T,
  code: number,
  count?: number,
  msg?: string,
}
