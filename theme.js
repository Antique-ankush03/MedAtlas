(() => {
  const storageKey = 'medatlas-theme';
  const toggles = document.querySelectorAll('[data-theme-toggle]');

  function applyTheme(theme) {
    const isNight = theme === 'night';
    document.documentElement.dataset.theme = isNight ? 'night' : 'light';
    document.querySelectorAll('[data-theme-toggle]').forEach(button => {
      button.setAttribute('aria-pressed', String(isNight));
      button.setAttribute('aria-label', isNight ? 'Switch to day theme' : 'Switch to night theme');
      const icon = button.querySelector('.theme-toggle-icon');
      const label = button.querySelector('.theme-toggle-label');
      if (icon) icon.textContent = isNight ? '☀' : '☾';
      if (label) label.textContent = isNight ? 'Day mode' : 'Night mode';
    });
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', isNight ? '#0d1b2a' : '#286da4');
  }

  let initial = 'light';
  try { initial = localStorage.getItem(storageKey) === 'night' ? 'night' : 'light'; } catch (error) { /* Storage can be unavailable in private contexts. */ }
  applyTheme(initial);

  toggles.forEach(button => button.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'night' ? 'light' : 'night';
    applyTheme(next);
    try { localStorage.setItem(storageKey, next); } catch (error) { /* Theme still works for this page. */ }
  }));
})();
