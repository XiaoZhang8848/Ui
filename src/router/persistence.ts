import router from '.';
router.beforeEach((to, from, next) => {
  next();
});

router.afterEach((to) => {
  if (to.meta.title != null) {
    document.title = to.meta.title as string;
  } else {
    document.title = import.meta.env.VITE_TITLE;
  }
});
