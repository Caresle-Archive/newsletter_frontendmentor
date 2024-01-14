<script setup>
import ImageBackgroundMobile from './assets/illustration-sign-up-mobile.svg'
import ImageBackgroundDesktop from './assets/illustration-sign-up-desktop.svg'
import CardBody from './components/CardBody.vue'
import SuccessMessage from './components/SuccessMessage.vue'
import { ref } from 'vue'

const isDesktop = ref(false)
const showSuccess = ref(false)

const desktopMediaQuery = window.matchMedia('(min-width: 720px)')

if (desktopMediaQuery.matches)
  isDesktop.value = true

desktopMediaQuery.addEventListener('change', event => {
  if (event.matches) {
    isDesktop.value = true
    return
  }
  isDesktop.value = false
})

const handleComplete = () => {
  showSuccess.value = true
}

const closeSuccess = () => {
  showSuccess.value = false
}
</script>

<template>
  <Transition>
    <section class="
      font-roboto font-normal bg-white max-w-3xl mx-auto rounded-lg md:max-h-[600px]
      md:grid md:grid-cols-2 md:rounded-2xl
    " v-if="!showSuccess">
      <div class="order-2 xl:max-h-fit xl:flex xl:justify-center xl:items-center">
        <img :src="isDesktop ? ImageBackgroundDesktop : ImageBackgroundMobile" class="rounded-lg xl:h-[95%]" />
      </div>

      <CardBody @complete="handleComplete" />
    </section>
    <SuccessMessage v-else @complete="closeSuccess" />
  </Transition>
</template>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.15s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>