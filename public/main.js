let heart = document.getElementsByClassName("fa-heart");
let trash = document.getElementsByClassName('fa-trash');

// Array.from(likeBtn).forEach(function (element) {
// 	element.addEventListener('click', function () {
// 		const likedPostId = this.parentNode.childNodes[4].dataset.id;
// 		const totalLikes = this.parentNode.childNodes[4].innerText;

// 		fetch('likePost', {
// 			method: 'put',
// 			headers: { 'Content-Type': 'application/json' },
// 			body: JSON.stringify({
// 				likedPostId: likedPostId,
// 				totalLikes: totalLikes,
// 			}),
// 		})
// 			.then(response => {
// 				if (response.ok) return response.json();
// 			})
// 			.then(data => {
// 				console.log(data);
// 				window.location.reload();
// 			});
// 	});
// });

Array.from(heart).forEach(function(element) {
	element.addEventListener('click', function(){
	  const id = this.parentNode.parentNode.childNodes[1].innerText
	  const heart = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)

	  fetch('feed', {
		method: 'put',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
		  '_id': id,
		  'heart': heart,
		})
	  })
	  .then(response => {
		if (response.ok) return response.json()
	  })
	  .then(data => {
		// console.log(data)
		// window.location.reload(true)
	  })
	});
});

Array.from(trash).forEach(function (element) {
	element.addEventListener('click', function () {
		const name = this.parentNode.parentNode.childNodes[1].innerText;
		const msg = this.parentNode.parentNode.childNodes[3].innerText;
		fetch('messages', {
			method: 'delete',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: name,
				msg: msg,
			}),
		}).then(function (response) {
			window.location.reload();
		});
	});
});
