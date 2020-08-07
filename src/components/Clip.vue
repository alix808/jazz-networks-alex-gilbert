<template>
  <div class="container">
    <button
      @click="clipAction"
      class="submit"
      ref="button"
      @mouseover="mouseover"
    >
      Clip!
    </button>
    <div class="submit-under" ref="under" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { TweenMax, Expo } from 'gsap/all';
export default {
  name: 'Clip',
  methods: {
    ...mapActions(['clipAction']),

    mouseover() {
      TweenMax.set(this.$refs.under, {
        opacity: 0.7,
        rotationY: 90,
        visibility: 'visible',
      });
      TweenMax.to(this.$refs.under, 1, {
        opacity: 1,
        rotationY: 0,
        ease: Expo.easeOut,
      });
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 24px;
  position: relative;
  width: 464px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
button {
  width: 302px;
  height: 56px;
  background-color: var(--dark);
  border: 1px solid var(--light);
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 17px;
  line-height: 1.47059;
  font-weight: 400;
  letter-spacing: -0.022em;
  outline: 0 none;
  z-index: 999;
  position: absolute;
}
.submit-under {
  z-index: -1;
  width: 304px;
  height: 58px;
  background: linear-gradient(#e66465, #9198e5);
  border-radius: 4px;
  visibility: hidden;
}
</style>
