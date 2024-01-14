const importAll = (r) => r.keys().map(r);

importAll(require.context("../images/", false, /\.(png|jpe?g|gif|svg)$/));
