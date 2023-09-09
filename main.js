// pin topnav on scroll
	const body = document.querySelector("body");
	window.onscroll = function() {
		scrollHandler()
	};
	function scrollHandler() {
		if (window.scrollY > 30) {
			body.classList.add("js-pinned-header");
		} else if (window.scrollY < 30) {
			body.classList.remove("js-pinned-header");
		}
	}

// show/hide subnav
	const js_links = [...document.querySelectorAll(".js_topnav_li_link")];
	const sublinks_bg = document.querySelector(".topnav_sublinks_bg");
	js_links.forEach(link => {
		link.addEventListener("mouseover", () => {
			sublinks_bg.classList.remove("hidden")
		})
		link.addEventListener("mouseleave", () => {
			sublinks_bg.classList.add("hidden")
		})
	})

// thumbs for maps
	thumbs = document.querySelectorAll(".map_thumb");
	for (let i = 0; i < thumbs.length; i++) {
		thumbs[i].style.backgroundImage = `url(images/maps/list${i+1}.jpg)`
	}

// mobile menu
	const menu_links = document.querySelector(".menu_links");
	const mobile_submenu = document.querySelector(".mobile_submenu");

	menu_links.querySelectorAll(".menu_drop").forEach(link => {
		link.addEventListener("click", e => {
			e.preventDefault();
			let item_arrow = link.querySelector(".item_arrow");
			let mobile_submenu = link.querySelector(".mobile_submenu");

			if (mobile_submenu.classList.contains("none")) {
				item_arrow.classList.remove("tfed")
				mobile_submenu.classList.remove("none");
			} else {
				item_arrow.classList.add("tfed")
				mobile_submenu.classList.add("none");
			}

		})
	})




	mobile_menu = document.querySelector(".mobile_menu");
	blackout = document.querySelector(".blackout");
	document.querySelector(".toggle").addEventListener("click", function(e) {
		if (mobile_menu.classList.contains("unclipped")) {
			blackout.classList.add("hidden")
			mobile_menu.classList.remove("unclipped")
			this.classList.add("tfed")
		} else {
			mobile_menu.classList.add("unclipped")
			blackout.classList.remove("hidden")
			this.classList.remove("tfed")
		}
	})