let audioBottom = document.getElementsByClassName("audio-bottom-off");

let imgRecText = `
<div id="imgRec" class="imgRec" name="imgRec">
Sorry this function not realised yet
<img
	src="./images/iconfinder_record_1419126.png"
	alt="Button Record Voice"
/>
<img
	src="./images/iconfinder_document_file_paper_page-10_2850898.png"
	alt="Button Record Voice"
/>
</div>
`;

// for (key in audioBottom){
	audioBottom[0].insertAdjacentHTML("beforebegin", imgRecText);
// }

// let imgRecs = document.getElementsByName('imgRec');

// for (key in imgRecs){
// 	imgRecs[key].addEventListener("click", function(){
// 		alert('Sorry this function not realised yet');
// 	})
// }
