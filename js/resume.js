document.addEventListener("DOMContentLoaded", () => {
  const elems = document.querySelectorAll(".collapsible");
  const instances = M.Collapsible.init(elems);

  const $scrollspy = document.querySelectorAll(".scrollspy");
  const scrollspyInstances = M.ScrollSpy.init($scrollspy);

  document
    .querySelectorAll(".activator, .card-reveal .card-title")
    .forEach((elem) => {
      elem.addEventListener("click", (event) => {
        event.target.closest("div .card").classList.toggle("small");
      });
    });
});
