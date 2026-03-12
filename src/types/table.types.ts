import type { RolesType } from "./enums.types"

export interface IUser {
	id: number
	name: string
	phone: string
	role: RolesType | null
}

export type ITableData = IUser[]
