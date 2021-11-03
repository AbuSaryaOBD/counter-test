const storeModuleExists = ({ state, namespace }) => {
  if (!state || !state[namespace]) {
    console.error(`${namespace} nuxt module error: store not initialized`);
    return false;
  } else {
    return true;
  }
};

export const value = ({ state, namespace }) => {
  if (!storeModuleExists({ state, namespace })) return undefined;

  return state[namespace].count;
};

export const adjust = ({ state, store, namespace, adjustment }) => {
  if (!storeModuleExists({ state, namespace })) return undefined;

  if (typeof adjustment !== "number") {
    return console.error(
      `${namespace} nuxt module error: adjustment should be of type 'number'.`
    );
  }

  return store.commit(`${namespace}/adjust`, adjustment);
};

export const log = ({ state, namespace }) => {
  if (!storeModuleExists({ state, namespace })) return undefined;

  const { count } = state[namespace];
  return console.log(count);
};
