let current  = document.getElementById("dummy");

function audioPlay(aid) {

	current.pause();
	current.currentTime = 0;
	current = document.getElementById(aid);
	var inc = document.getElementById(aid);
	inc.play();

}
