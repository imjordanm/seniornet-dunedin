;(function() {
  if ("fonts" in document) {
    // Optimization for Repeat Views
    if (sessionStorage.fontsLoadedCriticalFoftPreload) {
      document.documentElement.className += " fonts-loaded-2"
      return
    }
    document.fonts.load("800 1em Gilroy").then(function() {
      document.documentElement.className += " fonts-loaded-1"
      Promise.all([document.fonts.load("400 1em Inter")]).then(function() {
        document.documentElement.className += " fonts-loaded-2"
        // Optimization for Repeat Views
        sessionStorage.fontsLoadedCriticalFoftPreload = true
      })
    })
  }
})()
