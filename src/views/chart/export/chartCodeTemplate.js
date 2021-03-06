const htmlTemplate = () => `
<template>
  <div>
    <v-chart class="chart" :option="chartOptions" />
  </div>
</template>

`;

const scriptTemplate = (options) => `
<script>
import { BarChart, LineChart, PieChart } from "echarts/charts";
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
} from "echarts/components";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import VChart, { THEME_KEY } from "vue-echarts";
import { mapGetters } from "vuex";

use([
  CanvasRenderer,
  PieChart,
  BarChart,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
]);

export default {
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: "light",
  },

  data() {
    return {
		chartOptions:${options}
    };
  },

};
</script>

`;

const styleTemplate = () => `
<style scoped>
.chart {
  height: 400px;
}
</style>
`;

const createChartCode = (options) => {
  return htmlTemplate() + scriptTemplate(options) + styleTemplate();
};

export default createChartCode;
