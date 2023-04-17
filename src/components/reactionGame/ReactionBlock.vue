<template>
  <div class="block_reaction" v-if="showBlock" @click="stopTimer">
    Stlač ma
  </div>
</template>

<script>
export default {
  props: ['dealy'],
  data () {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0
    }
  },
  mounted () {
    setTimeout(() => {
      this.showBlock = true
      this.startTimer()
    }, this.dealy)
  },
  methods: {
    startTimer () {
      this.timer = setInterval(() => {
        this.reactionTime += 10
      }, 10)
    },
    stopTimer () {
      clearInterval(this.timer)
      this.$emit('end', this.reactionTime)
    }
  }
}
</script>

<style scoped>
    .block_reaction {
        width: 400px;
        border-radius: 20px;
        background: #0faf87;
        color: white;
        padding: 100px;
        margin: 40px auto;
    }
</style>
