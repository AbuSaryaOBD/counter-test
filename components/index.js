import Vue from "vue";
import components from "./lib";

const options = JSON.parse(`<%= JSON.stringify(options) %>`);

for (const name in components) {
  Vue.component(name, {
    extends: components[name],
    props: {
      _customCounterOptions: {
        type: Object,
        default: () => ({ ...options }),
      },
    },
  });
}
