import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { ITableData } from '../types/table.types'


export const useTableStore = defineStore('table', () => {
	const tableData = ref<ITableData>([])

	return {
		tableData
	}
})