window.addEventListener('DOMContentLoaded', event => {
  console.log('DOM fully loaded and parsed');
});

window.addEventListener('keydown', shortcutHandler, false);

// let systemInitiatedDark = window.matchMedia('(prefers-color-scheme: dark)');
// let theme = sessionStorage.getItem('theme');
// systemInitiatedDark.addListener(prefersColorTest);

// if (theme === 'dark') {
//   document.documentElement.setAttribute('data-theme', 'dark');
//   sessionStorage.setItem('theme', 'dark');
// } else if (theme === 'light') {
//   document.documentElement.setAttribute('data-theme', 'light');
//   sessionStorage.setItem('theme', 'light');
// }

// function themeModeSwitcher() {
//   let theme = sessionStorage.getItem('theme');

//   if (theme === 'dark') {
//     document.documentElement.setAttribute('data-theme', 'light');
//     sessionStorage.setItem('theme', 'light');
//   } else if (theme === 'light') {
//     document.documentElement.setAttribute('data-theme', 'dark');
//     sessionStorage.setItem('theme', 'dark');
//   } else if (systemInitiatedDark.matches) {
//     document.documentElement.setAttribute('data-theme', 'light');
//     sessionStorage.setItem('theme', 'light');
//   } else {
//     document.documentElement.setAttribute('data-theme', 'dark');
//     sessionStorage.setItem('theme', 'dark');
//   }
// }

// function prefersColorTest(systemInitiatedDark) {
//   if (systemInitiatedDark.matches) {
//     document.documentElement.setAttribute('data-theme', 'dark');
//     sessionStorage.setItem('theme', '');
//   } else {
//     document.documentElement.setAttribute('data-theme', 'light');
//     sessionStorage.setItem('theme', '');
//   }
// }

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const content = document.getElementById('content');

  const show = sidebar.getAttribute('data-show');
  if (show === 'true') {
    sidebar.setAttribute('data-show', 'false');

    sidebar.style.display = 'none';
    content.style.left = 0;
  } else {
    sidebar.setAttribute('data-show', 'true');

    sidebar.style.display = 'block';
    content.style.left = '300px';
  }
}

function shortcutHandler(e) {
  if (e.code === 'KeyT') {
    toggleSidebar();
  } else if (e.code === 'KeyS') {
  } else if (e.code === 'ArrowLeft') {
    previousChapter();
  } else if (e.code === 'ArrowRight') {
    nextChapter();
  }
}

function previousChapter() {
  const prevButton = document.getElementById('page-nav-prev');
  if (prevButton) {
    window.location.href = prevButton.href;
  }
}

function nextChapter() {
  const nextButton = document.getElementById('page-nav-next');
  if (nextButton) {
    window.location.href = nextButton.href;
  }
}
