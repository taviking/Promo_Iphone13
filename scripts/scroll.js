const scrollFunction = () => {
  const links = document.querySelectorAll(".header-menu__item a");
  const allCharater = document.querySelector(
    ".card-details__link-characteristics"
  );
  let section;
  let id;

  seamless.polyfill();

  const choseAttribute = (elem) => {
    elem.addEventListener("click", (event) => {
      event.preventDefault();

      id = elem.getAttribute("href").substring(1);
      section = document.getElementById(id);

      seamless.elementScrollIntoView(section, {
        behavior: "smooth",
        block: "start",
      });
    });
  };

  links.forEach((element) => {
    choseAttribute(element);
  });

  choseAttribute(allCharater);
};
scrollFunction();
