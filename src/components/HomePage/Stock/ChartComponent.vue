<template>
  <b-col lg="4">
    <p style="font-size: 18px" class="text-dark">CTCP Tập đoàn Đất Xanh (HSX:DXG)</p>
    <div class="d-flex">
      <div>
        <span style="color: #999999">Cập nhật lúc 10:34:07</span>
        <p class="number-large">41.55</p>
      </div>
      <div class="pl-5">
        <span class="text-dark">Thay đổi (%)</span>
        <p class="number-large">-0.005 <span style="font-size: 12px">(-0.12%)</span></p>
      </div>
    </div>
    <!-- CHART -->
    <div>
      <LineChart
        :chart-data="datacollection"
        :height="200"
      /> 
    </div>
  </b-col>
</template>

<script>
import LineChart from './LineChart.js'

export default {
  components: {
    LineChart
  },
  data () {
    return {
      datacollection: {}
    }
  },
  mounted () {
    this.fillData()
  },
  methods: {
    fillData () {
      this.datacollection = {
        labels: ['Thg 5', 'Thg 6', 'Thg 7', 'Thg 8',],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: 'rgba(113, 189, 223, 0.3)',
            borderColor: 'rgb(113, 189, 223)',
            lineTension: 0, 
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  }
}
</script>

<style scoped lang="scss">
  span {
    font-size: 12px;
    font-weight: bold;
  }
  .number-large {
    color: #bb0000;
    font-size: 30px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;;
  }
</style>