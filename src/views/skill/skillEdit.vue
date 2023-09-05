<script setup>
import { onMounted } from 'vue';
import UseSkills from '../../composable/skills';


const {skill, errors, UpdateSkill, getSkill} = UseSkills();

const props = defineProps ({
    id: {
        required: true,
        type: String
    }
})
onMounted(() => getSkill(props.id))
</script>
<template>
        <div class="mt-12">
    <form class="max-w-md mx-auto p-4 bg-white shadow-md rounded" @submit.prevent="UpdateSkill($route.params.id)">
        <div class="space-y-6">
            <div class="mb-6">

    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">name</label>
    <input type="text" id="name" v-model="skill.name" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <div v-if="errors.name">
        <span class="text-sm text-red-400">{{ errors.name[0] }}</span>
    </div>
</div>
    <div class="mb-6">
    <label for="slug" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Slug</label>    
    <input type="text" id="slug" v-model="skill.slug" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <div v-if="errors.slug">
        <span class="text-sm text-red-400">{{ errors.slug[0] }}</span>
    </div>
</div>

    <div class="mt-4">
        <button type="submit" class="px-4 py-2 bg-indigo-500 hover:bg-indigo-200 text-white rounded">Update</button>
    </div>
        </div>
    </form>
</div>
</template>