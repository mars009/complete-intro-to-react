// We declare flow types our project can use here
declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};
