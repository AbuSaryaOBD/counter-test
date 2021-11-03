const { resolve, join } = require("path");
const { readdirSync } = require("fs");

export default function (moduleOptions) {
  const options = {
    ...moduleOptions,
    ...this.options.customCounter,
  };

  if (!options.namespace) options.namespace = "customCounter";
  const { namespace } = options;

  const pluginToSync = [
    "components/index.js",
    "store/index.js",
    "plugins/index.js",
    "debug.js",
    "middleware/index.js",
  ];

  for (const pathString of pluginToSync) {
    this.addPlugin({
      src: resolve(__dirname, pathString),
      fileName: join(namespace, pathString),
      options,
    });
  }

  const folderToSync = ["plugins/helpers", "store/modules", "components/lib"];

  for (const pathString of folderToSync) {
    const path = resolve(__dirname, pathString);

    for (const file of readdirSync(path)) {
      this.addTemplate({
        src: resolve(path, file),
        fileName: join(namespace, pathString, file),
        options,
      });
    }
  }
}

module.exports.meta = require("./package.json");

// export default {
//   router: {
//     middleware: ['counter']
//   },
//   modules: [
//     ['@carepenny/custom-counter', { namespace: 'counter' }]
//   ],
//   customCounter: { initialValue: 6, debug: true }
// }
