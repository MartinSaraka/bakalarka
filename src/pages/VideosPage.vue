<template>
  <div class="container">
    <div class="header">

    </div>
    <div class="titleText">
    <h1>Zoznam videí určených pre rehabilitáciu ľudí po cievnej mozgovej príhode</h1>
  </div>
  <div class="q-pa-md" style="width: 300px">
    <div class="q-gutter-md">

      <q-select filled v-model="model" :options="options" label="Vyfiltrujte si cvičenia podľa seba" />
      </div>
      </div>
    <div class="content q-my-lg-xl">

      <div class="card">
        <div class="card-image">
          <img src="~assets/img/physiotherapy.jpg" alt="Information" />
        </div>
        <div class="card-content">
          <h2 class="card-title">Cvičenie nohy</h2>
          <h4 class="card-title">Obtiažnosť : stredná</h4>
          <p class="card-text">
            Stredne obtiažné cvičenie noh pre zlepšenie mobility. Dĺžka videa 5 minút.
          </p>
        </div>
      </div>
      <div class="card">
        <div class="card-image">
          <img src="~assets/img/physiotherapy.jpg" alt="My Portfolio" />
        </div>
        <div class="card-content">
          <h2 class="card-title">Cvičenie Chrbat</h2>
          <h4 class="card-title">Obtiažnosť : ľahká</h4>
          <p class="card-text">
            Ľahké cvičenie určené pre oblasŤ chrbta pre zlepšenie mobility. Dĺžka videa 5 minút.
          </p>
        </div>
      </div>
      <div class="card">
        <div class="card-image">
          <img src="~assets/img/physiotherapy.jpg" alt="About Me" />
        </div>
        <div class="card-content">
          <h2 class="card-title">Cvičenie ruky</h2>
          <h4 class="card-title">Obtiažnosť : stredná</h4>
          <p class="card-text">
            Stredne obtiažné cvičenie ŕuk pre zlepšenie mobility. Dĺžka videa 5 minút.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      model: ref(null),
      options: [
        'Ruky', 'Nohy', 'Chrbat', 'Krk'
      ]
    }
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #f2f2f2;
}

.header {
  text-align: center;
  margin-bottom: 40px;
}

.title {
  font-size: 48px;
  color: #333;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 24px;
  color: #666;
  margin-bottom: 40px;
}

.button-group {

  display: flex;
justify-content: center;
align-items: center;
}

.primary {
background-color: #007bff;
color: #fff;
border: none;
padding: 10px 20px;
border-radius: 5px;
margin-right: 10px;
cursor: pointer;
transition: background-color 0.2s;
}

.primary:hover {
background-color: #0062cc;
}

.secondary {
background-color: #fff;
color: #333;
border: 1px solid #ccc;
padding: 10px 20px;
border-radius: 5px;
cursor: pointer;
transition: background-color 0.2s;
}

.secondary:hover {
background-color: #f2f2f2;
}

.content {

display: flex;
flex-wrap: wrap;
justify-content: center;
}

.card {
background-color: #fff;
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
border-radius: 5px;
margin: 20px;
width: 300px;
transition: transform 0.2s;
}

.card:hover {
transform: translateY(-5px);
}

.card-image {
height: 200px;
overflow: hidden;
border-radius: 5px 5px 0 0;
}

.card-image img {
width: 100%;
height: auto;
object-fit: cover;
}

.card-content {
padding: 20px;
}

.card-title {
font-size: 24px;
margin-bottom: 20px;
color: #333;
}

.card-text {
font-size: 16px;
color: #666;
margin-bottom: 0;
line-height: 1.5;
}
.titleText {
font-size: 26px;
color: #666;
margin-bottom: 0;
line-height: 1.5;
}
</style>
