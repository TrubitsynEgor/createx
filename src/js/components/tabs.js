const tabsNav = document.querySelector('.services-block__tabs');
const tabBody = document.querySelectorAll('.work-content__item');
const tabsBtn = document.querySelectorAll('.services-block__btn');
const tabBodyActive = document.querySelectorAll('.work-content__item.active');
const loadMoreBtn = document.querySelector('.load-more');

const isLoadMoreNeeded = (selector) => {
  if (selector.length <= 9) {
    loadMoreBtn.style.display = 'none';
  } else {
    loadMoreBtn.style.display = 'block';
  }
}

tabsNav.addEventListener('click', el => {
  const target = el.target;
  if (target.classList.contains('services-block__btn')) {
    const path = target.dataset.path;

    tabBody.forEach(el => {
      el.classList.remove('active');
      el.classList.remove('active-more');
    });
    document.querySelectorAll(`[data-target="${path}"]`).forEach(el => el.classList.add('active'));

    isLoadMoreNeeded(document.querySelectorAll(`[data-target="${path}"]`));

    tabsBtn.forEach(el => el.classList.remove('active'));
    target.classList.add('active')
    if (path == 'all') {
      tabBody.forEach(el => el.classList.add('active'));

      isLoadMoreNeeded(document.querySelectorAll('.work-content__item.active'));

    }
  }
})

//todo ДОРАБОТАТЬ: Исчезновение элементов более 9 через JS (в сss - nth-child(n+10) работает не так как нужно)

isLoadMoreNeeded(tabBodyActive);

loadMoreBtn.addEventListener('click', (el) => {
  const activeItems = document.querySelectorAll('.work-content__item.active');

  const path = document.querySelector('.services-block__btn.active').dataset.path;
  if (path == 'all') {
    tabBody.forEach(el => {
      el.classList.add('active-more');
      loadMoreBtn.style.display = 'none';
    })
  } else {
    document.querySelectorAll(`[data-target="${path}"]`).forEach(el => el.classList.add('active-more'));
  }
})
