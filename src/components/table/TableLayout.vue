<template>
	<table class="table-auto border-collapse border border-gray-400 w-full mt-4">
		<thead class="bg-gray-200 border-gray-400">
			<tr>
				<TableHeader>Имя</TableHeader>
				<TableHeader width="200">Телефон</TableHeader>
				<TableHeader width="150">Роль</TableHeader>
				<TableHeader width="250">Действия</TableHeader>
			</tr>
		</thead>
		<tbody>
			<tr v-if="tableData.length === 0">
				<TableCell colspan="4" class="text-center py-4"> Нет данных </TableCell>
			</tr>
			<tr v-for="(user, index) in tableData" :key="index">
				<TableCell>{{ user.name || "Не указано" }}</TableCell>
				<TableCell width="200">{{ user.phone || "Не указан" }}</TableCell>
				<TableCell width="150">{{ user.role || "Не указано" }}</TableCell>
				<TableCell class="text-center" width="250">
					<ButtonPage
						@click="removeUser(user.id)"
						class="bg-red-500 text-white hover:bg-red-600"
					>
						Удалить пользователя
					</ButtonPage>
				</TableCell>
			</tr>
		</tbody>
	</table>
</template>

<script setup lang="ts">
import { toRefs } from "vue"
import { useTableStore } from "../../stores/table"
import ButtonPage from "../ui/ButtonPage.vue"
import TableCell from "./TableCell.vue"
import TableHeader from "./TableHeader.vue"

const tableStore = useTableStore()
const { tableData } = toRefs(tableStore)
const { removeUser } = tableStore
</script>

<style scoped></style>
