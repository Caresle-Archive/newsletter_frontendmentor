<script setup>
import PrimaryButton from './PrimaryButton.vue';
import IconSuccess from '../assets/icon-success.svg'

const emit = defineEmits(['complete'])
</script>

<template>
    <section class="bg-white h-[100vh] p-4 flex flex-col justify-center
        md:h-fit md:rounded-3xl md:max-w-[500px] md:p-8 md:shadow
    ">
        <div>
            <img :src="IconSuccess" />
        </div>
        <div class="my-8">
            <h1 class="font-bold text-4xl md:text-6xl">
                Thanks for subscribing!
            </h1>

            <p class="my-8 text-lg">
                A confirmation email has been sent to
                <span class="font-bold">
                    ash@loremcompany.com. 
                </span>
                Please open it and click the button inside to confirm your subscription.
            </p>
        </div>

        <PrimaryButton @click="emit('complete')">
            Dismiss message
        </PrimaryButton>
    </section>
</template>