(() => {
  const body = document.body;
  const themeToggle = document.querySelector('.theme-toggle');
  const progressBar = document.querySelector('#reading-progress-bar');
  const skillOutput = document.querySelector('#typed-skill');
  const navLinks = [...document.querySelectorAll('.site-nav a')];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const skills = ['le développement web', 'les bases de données', 'les systèmes informatiques', 'la résolution de problèmes'];
  let skillIndex = 0;

  document.querySelector('#current-year').textContent = new Date().getFullYear();

  themeToggle.addEventListener('click', () => {
    const isLight = body.classList.toggle('light-theme');
    themeToggle.setAttribute('aria-pressed', String(isLight));
    themeToggle.setAttribute('aria-label', isLight ? 'Activer le thème sombre' : 'Activer le thème clair');
    themeToggle.querySelector('.theme-toggle__icon').textContent = isLight ? '☼' : '◐';
  });

  const updateScrollState = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  };
  window.addEventListener('scroll', updateScrollState, { passive: true });
  window.addEventListener('resize', updateScrollState);
  updateScrollState();

  if ('IntersectionObserver' in window && !reducedMotion) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

  } else {
    document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
  }

  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const activeId = entry.target.id;
        navLinks.forEach((link) => {
          if (link.hash === `#${activeId}`) link.setAttribute('aria-current', 'page');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-25% 0px -65% 0px' });
    document.querySelectorAll('main > section[id]').forEach((section) => sectionObserver.observe(section));
  }

  if (!reducedMotion && skillOutput) {
    let characterIndex = skills[skillIndex].length;
    let deleting = true;
    const typeDelay = 55;
    const updateTypedSkill = () => {
      const currentSkill = skills[skillIndex];
      characterIndex += deleting ? -1 : 1;
      skillOutput.textContent = currentSkill.slice(0, characterIndex);
      if (characterIndex === 0) {
        deleting = false;
        skillIndex = (skillIndex + 1) % skills.length;
      } else if (characterIndex === skills[skillIndex].length) {
        deleting = true;
      }
      const pause = characterIndex === 0 ? 300 : deleting && characterIndex === currentSkill.length ? 1500 : typeDelay;
      window.setTimeout(updateTypedSkill, pause);
    };
    window.setTimeout(updateTypedSkill, 1500);
  }
})();