<template>
<div class="box">
  <div class="thing"></div>
  <div class="thing"></div>
  <div class="thing"></div>
  <div class="thing"></div>
</div>
</template>

<script>
export default {
name:"vloading"
}
</script>

<style scoped>
html, body {
  background-color: #1d1f20;
  margin: 0;
  height: 100%; }

.box {
  height: 100px;
  width: 100px;
  position: relative;
  top:250px;
  left: 150px;
  /* top: calc(50% - 25px);
  left: calc(50% - 25px); */
  perspective: 1000px; 
  }

.thing {
  height: 50px;
  width: 50px;
  background-color: #E87722;
  position: absolute;
  box-sizing: border-box;
  top: 0;
  left: 0; }

.thing:nth-of-type(1) {
  animation: bounce 0.5s ease-in-out infinite alternate, move 4s -1s infinite; }

.thing:nth-of-type(2) {
  animation: bounce 0.5s ease-in-out infinite alternate, move 4s -2s infinite; }

.thing:nth-of-type(3) {
  animation: bounce 0.5s ease-in-out infinite alternate, move 4s -3s infinite; }

.thing:nth-of-type(4) {
  animation: bounce 0.5s ease-in-out infinite alternate, move 4s -4s infinite; }

@keyframes bounce {
  from {
    transform: scale(1); }

  to {
    transform: scale(0.8); } }

@keyframes move {
  0% {
    top: 0;
    left: 0;
    background-color: #E87722; }

  25% {
    top: 0;
    left: 50%;
    background-color: #A4D65E; }

  50% {
    top: 50%;
    left: 50%;
    background-color: #69B3E7; }

  75% {
    top: 50%;
    left: 0;
    background-color: #FFC845; } }
</style>