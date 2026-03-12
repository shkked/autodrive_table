import { defineStore } from "pinia"
import { ref } from "vue"
import type { IUser } from "../types/table.types"

export const useModalAddUser = defineStore("modalAddUser", () => {
	const formData = ref<IUser>({
		id: 0,
		name: "",
		phone: "",
		role: null,
	})
	const modalAddUser = ref<HTMLDialogElement | null>(null)
	const isOpenModal = ref(false)

	const openModal = () => {
		isOpenModal.value = true
		modalAddUser.value?.showModal()

		document.body.style.overflow = "hidden"
	}

	const closeModal = () => {
		isOpenModal.value = false
		modalAddUser.value?.close()

		document.body.style.overflow = "visible"
	}

	const resetForm = () => {
		formData.value = {
			id: 0,
			name: "",
			phone: "",
			role: null,
		}
	}
	return {
		formData,
		isOpenModal,
		openModal,
		closeModal,
		modalAddUser,
		resetForm,
	}
})
