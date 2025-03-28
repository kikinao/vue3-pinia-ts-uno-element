import {Roles} from "@/typings/role";

export namespace Admin {

  // 登录参数
  export interface TokenInfo {
    access_token?: string
    expires_in?: number
    refresh_token?: string
    token_type?: string
  }

  // 用户信息
  export interface UserInfo {
    username?: string,
    id?: number | string,
    avatar?: string,
    createTime?: number,
    updateTime?: number,
    roles?: Roles.SetMenuRoleParams[],
    permissions?: any[]
  }
}
