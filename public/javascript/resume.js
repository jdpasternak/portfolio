document.addEventListener("DOMContentLoaded", () => {
  const elems = document.querySelectorAll(".collapsible");
  const instances = M.Collapsible.init(elems);

  document
    .querySelectorAll(".activator, .card-reveal .card-title")
    .forEach((elem) => {
      elem.addEventListener("click", (event) => {
        event.target.closest("div .card").classList.toggle("small");
      });
    });
});
