<script setup>
import NewLetterForm from './NewLetterForm.vue';
import FeaturesList from './FeaturesList.vue'


const emit = defineEmits(['complete'])
</script>

<template>
    <div class="w-11/12 mx-auto mt-8 text-cs-dark-slate-grey md:max-w-md md:mx-auto">
        <h1 class="font-bold text-4xl my-4">
            Stay updated!
        </h1>

        <p>
            Join 60,000+ product managers receiving monthly updates on:
        </p>

        <FeaturesList />

        <NewLetterForm @complete="emit('complete')" />
    </div>
</template>