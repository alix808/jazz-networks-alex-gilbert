<template>
  <svg
    ref="svg"
    @click="onClick"
    :class="{ dark: getClip }"
    width="302px"
    height="251px"
    viewBox="0 0 302 251"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <clipPath id="clip-path">
        <polygon
          id="Path"
          stroke="#979797"
          points="1.43529288 50.5672526 99.7431397 0.679023483 200.585411 0.679023483 301.00706 150.849883 250.573448 200.859308 99.7431397 249.933028 51.872469 249.933028"
        />
      </clipPath>
    </defs>
    <g
      id="Page-1"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <polygon
        id="Path"
        stroke="red"
        points="1.43529288 50.5672526 99.7431397 0.679023483 200.585411 0.679023483 301.00706 150.849883 250.573448 200.859308 99.7431397 249.933028 51.872469 249.933028"
      />
    </g>
    <rect
      fill="white"
      stroke="red"
      clip-path="url(#clip-path)"
      width="302"
      height="251"
      x="0"
    />
  </svg>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import * as d3 from 'd3';
export default {
  name: 'HelloWorld',
  data: () => ({
    click: false,
  }),
  computed: mapGetters(['getArray', 'getPosOne', 'getPosTwo', 'getClip']),
  methods: {
    ...mapActions(['addToArray']),
    drawLine(x1, y1, x2, y2) {
      const svg = d3.select(this.$refs.svg);
      svg
        .append('line')
        .style('stroke', '#252423')
        .style('stroke-width', 4)
        .attr('x1', x1)
        .attr('y1', y1)
        .attr('x2', x2)
        .attr('y2', y2);
    },
    onClick() {
      this.click = !this.click;
    },
  },
  watch: {
    getArray() {
      const pos1 = this.getPosOne;
      const pos2 = this.getPosTwo;
      // The initial array of coordinates  is empty
      if (typeof pos2 === 'undefined' || !this.click) {
        return;
      }
      if (this.click) {
        this.drawLine(pos1.x, pos1.y, pos2.x, pos2.y);
      }
    },
  },
  mounted() {
    const svg = this.$refs.svg;
    // Create an SVGPoint for future math
    const pt = svg.createSVGPoint();
    // Get point in global SVG space
    const cursorPoint = (evt) => {
      pt.x = evt.clientX;
      pt.y = evt.clientY;
      return pt.matrixTransform(svg.getScreenCTM().inverse());
    };
    // Add coordinates to an array in vuex
    const add = this.addToArray;
    svg.addEventListener(
      'mousemove',
      (evt) => {
        const loc = cursorPoint(evt);
        add(loc);
      },
      false
    );
  },
};
</script>

<style scoped>
svg {
  border: 1px solid #e66465;
  border-radius: 4px;
  background: white;
}

.dark {
  background: var(--dark);
}
</style>
