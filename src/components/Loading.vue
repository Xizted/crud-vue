<script lang="ts" setup>
</script>

<template>
  <div className="loading">
    <div className="half-circle-spinner">
      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
    </div>
  </div>
</template>



<style>

.loading{
    position: absolute;
    width: 100%;
    z-index: 2;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
}

.half-circle-spinner,
.half-circle-spinner * {
  box-sizing: border-box;
}

.half-circle-spinner {
  width: 80px;
  height: 80px;
  border-radius: 100%;
  position: relative;
}

.half-circle-spinner .circle {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: calc(60px / 10) solid transparent;
}

.half-circle-spinner .circle.circle-1 {
  border-top-color: #0d6efd;
  animation: half-circle-spinner-animation 1s infinite;
}

.half-circle-spinner .circle.circle-2 {
  border-bottom-color: #0d6efd;
  animation: half-circle-spinner-animation 1s infinite alternate;
}

@keyframes half-circle-spinner-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>