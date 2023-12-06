fetch("https://striveschool-api.herokuapp.com/books")
	.then((responseObj) => responseObj.ok && responseObj.json())
	.then((booksObj) => {
		const row = document.querySelector(".row");
		console.log(booksObj);
		booksObj.forEach((book) => {
			const div = document.createElement("div");
			div.classList.add("col-12", "col-md-6", "col-lg-3");
			const card = document.createElement("div");
			card.classList.add("card");
			const img = document.createElement("img");
			img.src = book.img;
			const divBody = document.createElement("div");
			divBody.classList.add("card-body");
			const h5 = document.createElement("h5");
			h5.innerText = book.title;
			const span = document.createElement("span");
			span.innerText = book.price;
			const button = document.createElement("a");
			button.classList.add("btn", "btn-primary", "mx-5");
			button.innerText = "Scarta";
			button.onclick = function (e) {
				e.target.closest(".col-12").remove();
			};
			divBody.appendChild(h5);
			divBody.appendChild(span);
			divBody.appendChild(button);
			card.appendChild(img);
			card.appendChild(divBody);
			div.appendChild(card);
			row.appendChild(div);
		});
	});
