(function () {
  var STORAGE_KEY = 'theme';
  var themes = ['system', 'light', 'dark'];
  var icons = { system: '◑', light: '○', dark: '●' };
  var labels = { system: '시스템', light: '라이트', dark: '다크' };

  function getTheme() {
    return localStorage.getItem(STORAGE_KEY) || 'system';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    updateSyntaxCSS(theme);
    updateButton(theme);
  }

  function updateSyntaxCSS(theme) {
    var light = document.getElementById('syntax-light');
    var dark = document.getElementById('syntax-dark');
    if (!light || !dark) return;
    if (theme === 'light') {
      light.media = 'all';
      dark.media = 'not all';
    } else if (theme === 'dark') {
      light.media = 'not all';
      dark.media = 'all';
    } else {
      light.media = '(prefers-color-scheme: light)';
      dark.media = '(prefers-color-scheme: dark)';
    }
  }

  function updateButton(theme) {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.textContent = icons[theme];
    btn.title = labels[theme];
  }

  function cycleTheme() {
    var current = getTheme();
    var next = themes[(themes.indexOf(current) + 1) % themes.length];
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('theme-toggle');
    if (btn) btn.addEventListener('click', cycleTheme);
    applyTheme(getTheme());
  });
})();
