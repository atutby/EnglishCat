const item2 = document
  .getElementsByClassName("item2")[0]
	.firstElementChild.getAttribute("href");
	
const regexp = /\w{11}/;
const idY = item2.match(regexp)
console.log(idY[0]);

const item2In = document.getElementsByClassName('item2')[0];
item2In.innerHTML = `
<div class="item">
	<h2><a href="https://www.youtube.com/watch?v=${idY[0]}"></a></h2>
	<div>
		<div class="img">
			<div class="video12">
				<iframe
				src="https://www.youtube.com/embed/${idY[0]}"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
			</div>
		</div>
		<ol></ol>
	</div>
</div>
`
