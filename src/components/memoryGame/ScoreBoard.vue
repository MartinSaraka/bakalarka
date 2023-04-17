<!-- eslint-disable vue/require-v-for-key -->
<template>
  <div class="scoreboard">
    <div class="scoreboard__board">
      <span class="text">Počet celkových ťahov: {{ turnCount }}</span>
      <div>
        <span v-for="turn in score" :class="`turn turn--${turn}`" />
      </div>

      <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ScoreBoard',
  props: {
    score: {
      type: Array,
      default: () => null
    }
  },
  computed: {
    turnCount () {
      return this.score.length
    }
  },
  methods: {
    matchCount () {
      return this.score.filter(turn => turn === 'match').length
    }
  },
  watch: {
    // whenever question changes, this function will run
    score () {
      console.log('aaaa')
      if (this.matchCount() === 8) {
        this.alert = true
      }
    }
  },
  data () {
    return {
      alert: false
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.text {
  color: black;
  display: inline-block;
  font: bold 16px arial;
  margin-right: 20px;
}
.scoreboard {
  color: #fff;
  display: flex;
  justify-content: space-between;
  min-height: 40px;
  padding: 15px 20px;
  top:0;
  left:0;
  width: 100%;
  @media (min-width: 700px) {
    padding: 15px 50px;
  }
}
.turn {
  height: 10px;
  border-radius: 5px;
  display: inline-block;
  margin-right: 3px;
  width: 10px;
}
.turn--miss {
  border: 2px solid #dddddd;
  background-color: white;
}
.turn--match {
  background: rgb(30,255,255);
}
</style>
