export const Roles = {
	Admin: "admin",
	Manager: "manager",
	Developer: "developer",
} as const

export type RolesType = (typeof Roles)[keyof typeof Roles]

