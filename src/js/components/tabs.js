const tabsNav = document.querySelector('.services-block__tabs');

tabsNav.addEventListener('click', el => {
  const target = el.target;
  if (target.classList.contains('services-block__btn')) {
    const path = target.dataset.path;
    document.querySelectorAll('.work-content__item').forEach(el => el.style.display = 'none');
    document.querySelectorAll(`[data-target="${path}"]`).forEach(el => el.style.display = 'flex');
    document.querySelectorAll('.services-block__btn').forEach(el => el.classList.remove('active'));
    document.querySelector(`[data-path="${path}"]`).classList.add('active')
    if (target.dataset.path == 'all') {
      document.querySelectorAll('.work-content__item').forEach(el => el.style.display = 'flex');
    }
  }
})

