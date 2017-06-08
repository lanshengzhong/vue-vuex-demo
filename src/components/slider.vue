<style scoped>

</style>
<template>
  <yd-slider autoplay="3000">
    <template v-for="(item,$index) in imgArr">
      <yd-slider-item>
          <img :src="item">
      </yd-slider-item>
    </template>
  </yd-slider>
</template>

<script>

  export default {
    props: ['imgArr'],
    data () {
      return {

      }
    },
    methods: {

    },

  }
</script>


