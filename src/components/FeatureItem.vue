<script setup>
import IconList from '../assets/icon-list.svg'
</script>

<template>
    <li class="flex my-2">
        <div class="mr-4">
            <img :src="IconList" />
        </div>
        <span>
            <slot />
        </span>
    </li>
</template>