<template>
  <div class="app">
    <HelloWorld />
    <Clip />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Clip from './components/Clip.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Clip,
  },
};
</script>

<style>
:root {
  --dark: #252423;
  --light: #444342;
  --blue: #4095bf;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

body {
  background: var(--dark);
}
</style>
