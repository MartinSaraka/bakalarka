<template>
  <div class="app">
    <h2 class="textSize">Jednoduchá hra na precvičenie reakcií !</h2>
  <h2 class="textSize1">Reakčný časovač, otestuj si svoje reakcie, stlač čo najrýchlejšie na štvorec, ktorý sa objaví určitý čas po stlačení tlačítka hrať</h2>
  <button @click="start" :disabled="isPlaying" >Hrať</button>
  <Block v-if="isPlaying" :dealy="delay" @end="endgame" />
  <Results v-if="showResults" :score="score" />
</div>
</template>

<script>

import Block from 'src/components/reactionGame/ReactionBlock.vue'
import Results from 'src/components/reactionGame/ReactionResults.vue'
export default {
  name: 'App',
  components: { Block, Results },
  data () {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false
    }
  },
  methods: {
    start () {
      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true
      this.showResults = false
    },
    endgame (reactionTime) {
      this.score = reactionTime
      this.isPlaying = false
      this.showResults = true
    }
  }
}
</script>

<style>
.textSize {
  font-size: 26px;
}
.textSize1 {
  font-size: 18px;
}
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
button {
  background: #0faf87;
  color: white;
  border: none;
  width: 80px;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
  margin: 10px;
}
button[disabled] {
  opacity: 0.2;
  cursor: not-allowed;
}
</style>
