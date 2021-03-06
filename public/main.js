let likeBtn = document.getElementsByClassName('likeBtn');
let trash = document.getElementsByClassName('fa-trash');

Array.from(likeBtn).forEach(function (element) {
	element.addEventListener('click', function () {
		const likedPostId = element.dataset.id
		console.log('likedPostId:', likedPostId)
		const totalLikes = this.parentNode.childNodes[4].innerText;

		fetch('likePost', {
			method: 'put',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				likedPostId: likedPostId,
				totalLikes: totalLikes,
			}),
		})
			.then(response => {
				if (response.ok) return response.json();
			})
			.then(data => {
				console.log(data);
				window.location.reload();
			});
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
