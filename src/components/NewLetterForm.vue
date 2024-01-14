<script setup>
import PrimaryButton from './PrimaryButton.vue';
import { ref } from 'vue';

const invalidEmail = ref(false)

const emailStyle = `
invalid:text-cs-tomato invalid:font-bold invalid:bg-cs-tomato-back
`
const invalidEmailClass = ref('')
const inputValue = ref('')
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

const handleSubmit = event => {
    event.preventDefault()
    console.log('handle')

    if (inputValue.value.match(regexEmail) === null) {
        invalidEmail.value = true
        invalidEmailClass.value = emailStyle
        return
    }

    emit('complete')
}

const emit = defineEmits(['complete'])
</script>

<template>
    <form @submit="handleSubmit">
        <div class="flex flex-col">
            <div class="flex w-full justify-between">
                <label for="emailInput" class="mb-2 font-bold">
                    Email address
                </label>
                <span v-if="invalidEmail" class="font-bold text-cs-tomato">
                    Valid Email required
                </span>
            </div>
            <input id="emailInput" placeholder="email@company.com"
                :class="
                    `border p-3 rounded-lg border-cs-grey outline-none
                    transition-all focus:outline-cs-dark-slate-grey invalid:outline-cs-tomato
                bg-white ${invalidEmailClass}`"
                v-model="inputValue"
            />
        </div>
        <PrimaryButton>
            Subscribe to monthly newsletter
        </PrimaryButton>
    </form>
</template>