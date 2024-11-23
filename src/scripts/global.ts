import lozad from "lozad";
import "./fireworks.js";
import "./nav";


const setup = () => {
	const observer = lozad(".lozad", {
		loaded: (el) => {
			el.classList.add("loaded");
		},
	});

	observer.observe();
};

document.addEventListener("DOMContentLoaded", setup);

if (window.swup?.hooks) {
	setup();
} else {
	document.addEventListener("swup:enable", () => { window.swup.hooks.on("content:replace", setup) });
}
