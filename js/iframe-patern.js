let item2s = document.getElementsByClassName("item2");
item2s = Array.from(item2s);

const regexp = /[\w-]{11}/;
let titleItem;

item2s.forEach((item) => {
  idYoutube = item.firstElementChild.getAttribute("href").match(regexp)[0];

  titleItem = item.firstElementChild.innerText;

  let ul;
  // ul = item.firstElementChild.nextElementSibling.classList.add("crossing");
  // ul = item.firstElementChild.nextElementSibling.insertAdjacentHTML(
  //   "afterbegin",
  //   '<li class="control">Развернуть/Свернуть</li>'
  // );
  ul = item.firstElementChild.nextElementSibling.outerHTML;

  item.innerHTML = `
			<div class="item">
				<h2><a href="https://www.youtube.com/watch?v=${idYoutube}">${titleItem}</a></h2>
				<div>
					<div class="img">
						<div class="video12" style="background: url(//i.ytimg.com/vi/${idYoutube}/hqdefault.jpg)  0% 0% / cover;">
								<div class="video1-play" onclick="videoplay(this, '${idYoutube}');"></div>
						</div>
					</div>
					${ul}
				</div>
			</div>
			`;
});
// - the End cycle intem2s.forEach

function videoplay(button, id) {
	var par = button.parentNode;
	console.log(par);
    par.innerHTML = `
				<iframe
							src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
					>
				</iframe>`;
}
