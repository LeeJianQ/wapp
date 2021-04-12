<template>
  <div>
    Home works
    {{count}}
    <van-button @click="increment" type="primary">+1</van-button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { Button } from 'vant'

export default defineComponent({
  name: 'Home',
  components: {
    [Button.name]: Button
  },
  setup () {
    const store = useStore()
    console.log(import.meta.env)
    return {
      count: computed(() => store.state.a.count),
      increment: () => store.commit('increment')
    }
  }
})

</script>

<style scoped>
</style>