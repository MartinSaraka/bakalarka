<template>
  <p>Reaction time - {{ score }} milliseconds</p>
  <p class="rank">{{ rank }}</p>
</template>

<script>
export default {
  props: ['score'],
  data () {
    return {
      rank: null
    }
  },
  mounted () {
    if (this.score < 250) {
      this.rank = 'Vynikajúce reflexy'
    } else if (this.score < 400) {
      this.rank = 'Dobré reflexy'
    } else {
      this.rank = 'Príliš pomalý'
    }
  }
}
</script>

<style>
  .rank {
      font-size: 1.4em;
      color: #0faf87;
      font-weight: bold;
  }
</style>
