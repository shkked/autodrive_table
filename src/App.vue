<template>
	<div class="min-h-screen flex flex-col px-4">
		<div class="flex justify-end mt-4">
			<ButtonPage @click="openModal" class="hover:bg-blue-600/20">
				Добавить пользователя
			</ButtonPage>
		</div>
		<TableLayout />

		<ModalAddUser />
	</div>
</template>

<script setup lang="ts">
import { onMounted } from "vue"
import TableLayout from "./components/table/TableLayout.vue"
import ButtonPage from "./components/ui/ButtonPage.vue"
import ModalAddUser from "./components/ui/ModalAddUser.vue"
import { useModalAddUser } from "./stores/modalAddUser"
import { useTableStore } from "./stores/table"

const tableStore = useTableStore()
const modalStore = useModalAddUser()

const { openModal } = modalStore

onMounted(async () => {
	await tableStore.fetchUsers()
})
</script>
