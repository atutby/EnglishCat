let item2s = document.getElementsByClassName("item2");
item2s = Array.from(item2s);

const regexp = /\w{11}/;
let titleItem, ulItem;

item2s.forEach((item) => {
  idYoutube = item.firstElementChild.getAttribute("href").match(regexp)[0];
	
	titleItem = item.firstElementChild.innerText;

	ulItem = item.firstElementChild.nextElementSibling.classList.add("crossing");
	ulItem = item.firstElementChild.nextElementSibling.insertAdjacentHTML('afterbegin', '<li class="control">Развернуть/Свернуть</li>');
	ulItem = item.firstElementChild.nextElementSibling.outerHTML;

  item.innerHTML = `
<div class="item">
	<h2><a href="https://www.youtube.com/watch?v=${idYoutube}">${titleItem}</a></h2>
	<div>
		<div class="img">
			<div class="video12">
				<iframe
				src="https://www.youtube.com/embed/${idYoutube}"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
			</div>
		</div>
		${ulItem}
	</div>
</div>
`;
});

