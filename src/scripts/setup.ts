import lozad from "lozad";

const setupUrlAnchor = () => {
  const url = window.location.href;
  const urlElement = document.getElementById("post-url") as HTMLAnchorElement | null;
  if (urlElement) {
    urlElement.href = url;
    urlElement.innerText = url;
  }
}

const setupLozad = () => {
  const observer = lozad(".lozad", {
    loaded: (el) => {
      el.classList.add("loaded");
    },
  });

  observer.observe();
};

const setup = () => {
  setupUrlAnchor();
  setupLozad();
}

document.addEventListener("DOMContentLoaded", setup);

if (window.swup?.hooks) {
  setup();
} else {
  document.addEventListener("swup:enable", () => { window.swup.hooks.on("content:replace", setup) });
}
