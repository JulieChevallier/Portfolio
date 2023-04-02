const sections = document.querySelectorAll('.interval');

sections.forEach((section) => {
  window.addEventListener('scroll', function() {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionBottom = sectionTop + sectionHeight;
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollY > sectionTop - windowHeight / 2 && scrollY < sectionBottom - windowHeight / 2) {
      section.classList.add('in-view');
      section.classList.remove('scroll-up');
      section.classList.remove('scroll-down');
    } else if (scrollY < sectionTop - windowHeight / 2) {
      section.classList.remove('in-view');
      section.classList.remove('scroll-down');
      section.classList.add('scroll-up');
    } else {
      section.classList.remove('in-view');
      section.classList.remove('scroll-up');
      section.classList.add('scroll-down');
    }
  });
});
