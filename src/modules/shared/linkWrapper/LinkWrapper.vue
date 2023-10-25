<script setup lang="ts">
import { RouterLink } from 'vue-router'

interface Props {
	isExternal: boolean
	path: string
}

defineProps<Props>()
</script>

<template>
	<a 
		v-if="isExternal"
		:href="path"
		target="_blank"
		rel="noopener noreferrer"
	>
		<slot></slot>
	</a>
	<RouterLink v-else :to="path">
		<slot></slot>
	</RouterLink>
</template>