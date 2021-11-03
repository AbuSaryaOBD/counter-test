<template>
  <div class="custom-counter">
    <h1>Count is: {{ count }}</h1>
    <button class="custom-counter--button" @click="adjust(-1)">Minus</button>
    <button class="custom-counter--button" @click="adjust(+1)">Add</button>
  </div>
</template>

<script>
  export default {
    computed: {
      pluginOptions() {
        return this._customCounterOptions || {};
      },

      injectedPluginName() {
        const { pluginOptions } = this;
        return pluginOptions.namespace
          ? "$" + pluginOptions.namespace
          : undefined;
      },

      count() {
        const { injectedPluginName } = this;
        return injectedPluginName
          ? this[injectedPluginName].value()
          : undefined;
      },
    },

    methods: {
      adjust(adjustment) {
        const { injectedPluginName } = this;
        this[injectedPluginName].adjust(adjustment);
      },
    },
  };
</script>

<style lang="scss" scoped></style>
