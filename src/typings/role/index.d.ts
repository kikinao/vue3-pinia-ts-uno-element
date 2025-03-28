export namespace Roles {
  type dataScope = 'ALL' | 'CREATOR'

  export interface RoleList {
    id: string
    createTime: number
    updateTime: number
    code: string
    name: string
    userId?: any
    dataScope: dataScope
    creatorId?: any
  }

  // 接口参数
  export interface SetMenuRoleParams {
    "id"?: number, // 主键
    "createTime"?: string, // 创建时间
    "updateTime"?: string, // 修改时间
    "parentId"?: number, // 父级id
    "name"?: string, // 菜单名称
    "css"?: string, // css样式
    "url"?: string, // 请求路径
    "path"?: string, // 路由路径
    "sort"?: number, // 排序
    "type"?: number, // 1-菜单，2-按钮
    "hidden"?: true, // 是否隐藏
    "pathMethod"?: string, // 请求方式
    "creatorId"?: number, // 创建人
    "subMenus"?: SetMenuRoleParams[]  // 子菜单
    "roleId"?: number, // 角色id
    "menuIds"?: string[]// 菜单id
  }
}
