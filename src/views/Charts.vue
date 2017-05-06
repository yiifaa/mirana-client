<template>
  <div class="animated fadeIn">
    <div class="card-columns cols-2">
      <div class="card">
        <div class="card-header">
          Line Chart
          <div class="card-actions">
            <a href="http://www.chartjs.org"><small class="text-muted">docs</small></a>
          </div>
        </div>
        <div class="card-block">
          <div class="chart-wrapper">
            <line-example/>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          Bar Chart
          <div class="card-actions">
            <a href="http://www.chartjs.org"><small class="text-muted">docs</small></a>
          </div>
        </div>
        <div class="card-block">
          <div class="chart-wrapper">
            <bar-example/>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          Doughnut Chart
          <div class="card-actions">
            <a href="http://www.chartjs.org"><small class="text-muted">docs</small></a>
          </div>
        </div>
        <div class="card-block">
          <div class="chart-wrapper">
            <doughnut-example/>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          Radar Chart
          <div class="card-actions">
            <a href="http://www.chartjs.org"><small class="text-muted">docs</small></a>
          </div>
        </div>
        <div class="card-block">
          <div class="chart-wrapper">
            <radar-example/>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          Pie Chart
          <div class="card-actions">
            <a href="http://www.chartjs.org"><small class="text-muted">docs</small></a>
          </div>
        </div>
        <div class="card-block">
          <div class="chart-wrapper">
            <pie-example/>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          Polar Area Chart
          <div class="card-actions">
            <a href="http://www.chartjs.org"><small class="text-muted">docs</small></a>
          </div>
        </div>
        <div class="card-block">
          <div class="chart-wrapper">
            <polar-area-example/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import BarExample from './charts/BarExample.vue'
import LineExample from './charts/LineExample.vue'
import DoughnutExample from './charts/DoughnutExample.vue'
import RadarExample from './charts/RadarExample.vue'
import PieExample from './charts/PieExample.vue'
import PolarAreaExample from './charts/PolarAreaExample.vue'

export default {
  name: 'charts',
  components: {
    BarExample,
    LineExample,
    DoughnutExample,
    RadarExample,
    PieExample,
    PolarAreaExample
  }
}
</script>
