<template>
  <div class="container">
    <div class="header">

    </div>
    <div class="content">
      <div class="card">
        <div class="card-image">
          <img src="~assets/img/knowledge.jpg" alt="Information" />
        </div>
        <div class="card-content">
          <h2 class="card-title">Mozgová príhoda</h2>
          <p class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet laoreet dui. Nullam pharetra
            posuere bibendum. Donec euismod lectus ac turpis accumsan, at malesuada lorem venenatis.
          </p>
        </div>
      </div>
      <div class="card">
        <div class="card-image">
          <img src="~assets/img/physiotherapy.jpg" alt="My Portfolio" />
        </div>
        <div class="card-content">
          <h2 class="card-title">Rehabilitačné videá</h2>
          <p class="card-text">
            Sed eget nunc at ipsum tempor feugiat. Quisque et blandit metus. Nullam bibendum diam quis erat
            faucibus euismod. Proin tincidunt est et nibh laoreet, non ullamcorper quam facilisis.
          </p>
        </div>
      </div>
      <div class="card">
        <div class="card-image">
          <img src="~assets/img/games.jpg" alt="About Me" />
        </div>
        <div class="card-content">
          <h2 class="card-title">Hry </h2>
          <p class="card-text">
            Fusce lacinia, elit nec molestie hendrerit, enim lorem pretium augue, ut tristique mi nisi in dolor. Donec
            at velit facilisis, congue nibh sit amet, aliquam massa. Morbi malesuada leo justo, eget tristique nisi
            convallis at.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'MainPage',
  setup () {
    const state = reactive({
      // state properties here
    })

    return {
      ...state
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
</style>
