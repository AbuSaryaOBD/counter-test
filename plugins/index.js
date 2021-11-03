import * as helpers from "./helpers/index";

const options = JSON.parse(`<%= JSON.stringify(options) %>`);
const { namespace } = options;

export default ({ store }, inject) => {
  const { state } = store;

  inject(namespace, {
    value() {
      return helpers.value({ state, namespace });
    },
    adjust(adjustment) {
      return helpers.adjust({ state, store, namespace, adjustment });
    },
    log() {
      return helpers.log({ state, namespace });
    },
    message(string) {
      return helpers.message({ namespace, string });
    },
  });
};
