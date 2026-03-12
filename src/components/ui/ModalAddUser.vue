<template>
	<dialog
		v-show="isOpenModal"
		ref="modalAddUser"
		class="fixed inset-0 z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 flex items-center justify-center rounded-lg"
	>
		<div>
			<button
				@click="closeModal"
				class="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none cursor-pointer"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
		</div>
		<div class="bg-white p-9 rounded-lg shadow-lg w-full">
			<h2 class="text-2xl font-bold mb-6">Добавить пользователя</h2>
			<form @submit.prevent="sumbitForm">
				<div class="mb-4">
					<label for="name" class="block text-gray-700 font-bold mb-2"
						>Имя:</label
					>
					<input
						v-model="formData.name"
						type="text"
						id="name"
						class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Введите имя"
						required
					/>
				</div>
				<div class="mb-4">
					<label for="phone" class="block text-gray-700 font-bold mb-2"
						>Телефон:</label
					>
					<input
						v-model="formData.phone"
						type="text"
						id="phone"
						pattern="(\+7|8)[\s\-\(\)]*\d{3}[\s\-\(\)]*\d{3}[\s\-\(\)]*\d{2}[\s\-\(\)]*\d{2}"
						class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Введите номер"
						required
					/>
				</div>
				<div class="mb-4">
					<label for="role" class="block text-gray-700 font-bold mb-2"
						>Роль:</label
					>
					<select
						v-model="formData.role"
						id="role"
						class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
					>
						<option value="admin">Администратор</option>
						<option value="manager">Менеджер</option>
						<option value="developer">Разработчик</option>
					</select>
				</div>
				<div class="flex justify-end">
					<button-page
						type="submit"
						class="bg-blue-500 text-white hover:bg-blue-600"
					>
						Добавить
					</button-page>
				</div>
			</form>
		</div>
	</dialog>
</template>

<script setup lang="ts">
import { toRefs } from "vue"
import { useModalAddUser } from "../../stores/modalAddUser"
import { useTableStore } from "../../stores/table"
import ButtonPage from "./ButtonPage.vue"

const storeModalAddUser = useModalAddUser()
const { closeModal, resetForm } = storeModalAddUser
// @ts-ignore
const { formData, isOpenModal, modalAddUser } = toRefs(storeModalAddUser)

const storeTable = useTableStore()
const { addUser } = storeTable

const sumbitForm = () => {
	addUser(formData.value)
	resetForm()
	closeModal()
}
</script>

<style scoped></style>
