function getDefaultState() {
  return {config: {}};
}

export function createMockStore() {
  return {
    subscribe: () => {},
    dispatch: () => {},
    getState: () => getDefaultState()
  };
}
