<template>
  <div>

</div>
  <div class="spot-the-difference">
    <div class="images-container row">
      <div class="image-wrapper col-md-8" @click="processClick($event, 0)">
        <img src="~assets/img/obrazok1.png" />

      </div>
      <div class="image-wrapper" @click="processClick($event, 1)">
        <img src="~assets/img/obrazok2.png" />
      </div>
    </div>
    <div class="score">
  Čas: {{ timer }}s | Kliknutia: {{ clicks }} | Nájdené rozdiely: {{ differencesFound }}/{{ maxDifferences }}
</div>
<div v-for="(item, index) in levelData.differences.filter(dif =>dif.found)" :key="item.id">
    {{index+1}}. {{item.type}}
  </div>
  </div>

  <q-dialog v-model="alertDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">Vyhral si</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Zvládol si to za Čas: {{ timer }}s | Kliknutia: {{ clicks }}
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>
<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import gameData from './gameData.json'
const levelData = ref(computed(() => gameData[currentLevel.value]))
const alertDialog = ref(false)
const time = ref(0)
const clicks = ref(0)
const timer = ref(0)
let timerInterval
const currentLevel = ref(0)
const differencesFound = ref(0)
const founded = ref()
const maxDifferences = computed(() => gameData[currentLevel.value].differences.length)
const foundDifferences = ref(computed(() => {
  return levelData.value.differences.filter(difference => difference.found === true)
}))

const processClick = (event, imageIndex) => {
  clicks.value++
  const rect = event.target.getBoundingClientRect()
  const clickX = event.clientX - rect.left
  const clickY = event.clientY - rect.top
  console.log('x : ' + clickX)
  console.log('y : ' + clickY)
  for (const difference of levelData.value.differences) {
    const { x, y, width, height, found } = difference
    console.log(difference)
    if (difference.found !== true && clickX >= x - width / 2 && clickX <= x + width / 2 && clickY >= y - height / 2 && clickY <= y + height / 2) {
      differencesFound.value++
      difference.found = true // Mark the difference as found
      foundDifferences.value = levelData.value.differences.filter(difference => difference.found)
      break
    }
  }

  if (differencesFound.value === maxDifferences.value) {
    stopTimer()
    alertDialog.value = true
  }
}
watch(differencesFound, async (newQuestion, oldQuestion) => {
  console.log(levelData.value.differences.filter(dif => dif.found))
  foundDifferences.value = levelData.value.differences.filter(dif => dif.found)
  console.log(foundDifferences.value)
})
const startTimer = () => {
  timerInterval = setInterval(() => {
    timer.value++
  }, 1000)
}

const stopTimer = () => {
  clearInterval(timerInterval)
}

onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  stopTimer()
})

</script>

<style scoped>
.difference-indicator {
  position: absolute;
  border: 2px solid red;
  pointer-events: none;
  box-sizing: border-box;
}
.spot-the-difference {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.images-container {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.image-wrapper {
  position: relative;
  min-width: 400px;
    min-height: 255px;
    max-width: 400px;
    max-height: 255px;
}

.score {
  font-size: 1.2em;
}
</style>
