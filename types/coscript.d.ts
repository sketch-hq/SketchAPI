declare const coscript: {
  createFiber: () => {
    onCleanup: (callback: () => void) => void
    cleanup: () => void
  }
}
