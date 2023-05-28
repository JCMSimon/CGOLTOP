text = document.getElementsByClassName("mainText")[0]

const apiUrl = 'https://pixelplace.io/api/get-user.php?username=Renko';

function getPlayerData(username) {
	return new Promise((resolve, reject) => {
	  fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://pixelplace.io/api/get-user.php?username=' + username)}`)
		.then(response => response.json())
		.then(data => resolve(data.contents))
		.catch(error => reject(error));
	});
  }
  function main(username) {
	getPlayerData("CGOL")
		.then(data => {
		let CGOLCount = JSON.parse(data).pixels;
	getPlayerData(username)
		.then(data => {
		let RenkoCount = JSON.parse(data).pixels;

	diff = RenkoCount - CGOLCount
	if (diff < 0) {
		text.innerHTML = "<mark>CGOl</mark> has won over <mark>" + username + "</mark>"
	} else if (diff == 0) {
		text.innerHTML = "<mark>CGOl</mark> is equal to <mark>" + username + "</mark>"
	} else {
		text.innerHTML = "<mark>CGOL</mark> is <mark>" + diff.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") +  "</mark> pixel behind <mark>" + username + "</mark>"
}})})}

main("Klops")
