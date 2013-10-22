if (typeof window !== "undefined" && window !== null) {
  if (window.BrowserFS) {
    for (name in BrowserFS) {
      if (!__hasProp.call(BrowserFS, name)) continue;
      value = BrowserFS[name];
      window.BrowserFS[name] = value;
    }
  } else {
    window.BrowserFS = BrowserFS;
  }
} else if (typeof self !== "undefined" && self !== null) {
  self.BrowserFS = BrowserFS;
} else {
  throw new Error('This library only supports node.js and modern browsers.');
}
