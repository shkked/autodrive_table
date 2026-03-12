import { defineStore } from "pinia"
import { ref } from "vue"
import type { ITableData, IUser } from "../types/table.types"

export const useTableStore = defineStore("table", () => {
	const tableData = ref<ITableData>([])

	const addUser = (user: IUser) => {
		const existingUser = tableData.value.find(u => u.phone === user.phone)
		if (existingUser) {
			return
		}

		const newUser = {
			...user,
			id: Date.now(),
		}
		tableData.value.push(newUser)
	}

	const removeUser = (id: number) => {
		tableData.value = tableData.value.filter(user => user.id !== id)
	}

	async function fetchUsers() {
		setTimeout(() => {
			tableData.value = [
				{
					id: 1,
					name: "Кирилл Иванов",
					phone: "+7 123 456-78 90",
					role: "admin",
				},
				{
					id: 2,
					name: "Джейн Смит",
					phone: "+7 987 654-32 10",
					role: "developer",
				},
				{
					id: 3,
					name: "Мария Петрова",
					phone: "+7 555 555-55 55",
					role: "manager",
				},
			]
		}, 1000)
	}
	return {
		tableData,
		fetchUsers,
		removeUser,
		addUser,
	}
})
