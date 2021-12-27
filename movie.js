function Movie( title, description, update, img ) {
    this.title = title;
    this.description = description;
    this.update = update;
    this.img = img;
}
const MovieInfo = [];
MovieInfo.push(new Movie('Avengers: Endgame','last update', 'SUN # SEPT - 10:00PM', 'img/1.jpg'))
MovieInfo.push(new Movie('HOBBS& Shaw','last update', 'SUN # SEPT - 10:00PM', 'img/2.jpg'))
MovieInfo.push(new Movie('John Wick3','last update', 'SUN # SEPT - 10:00PM', 'img/3.jpg'))
MovieInfo.push(new Movie('Deadpool2','last update', 'SUN # SEPT - 10:00PM', 'img/4.jpg'))
MovieInfo.push(new Movie('The Lion king','last update', 'SUN # SEPT - 10:00PM', 'img/5.jpg'))
MovieInfo.push(new Movie('Mad Max Fury Road','last update', 'SUN # SEPT - 10:00PM', 'img/6.jpg'))
MovieInfo.push(new Movie('Aquaman','last update', 'SUN # SEPT - 10:00PM', 'img/7.jpg'))
MovieInfo.push(new Movie('Mission Impossible','last update', 'SUN # SEPT - 10:00PM', 'img/8.jpg'))


const cardView = (cardInfo) => {
    return `
    <div class=" card col-2">
    <div>
        <img src=${cardInfo.img} alt=${cardInfo.title} class="photo">
    </div>
    <div>
        <h3 class="title">${cardInfo.title}</h3>
        <h4 class="des">${cardInfo.description}</h4>
        <h6 class="update">${cardInfo.update}</h6>
    </div>
</div>
    `
}


const generateCards = (cardInfoList) =>{
    return cardInfoList.map(cardInfo =>{
        return cardView(cardInfo)
    }).join("")
}


const cardContainer = document.getElementById('container');
cardContainer.innerHTML = generateCards(MovieInfo)

function onSearch(element){
    const searchTerm = element.value;
    const filteredCards = MovieInfo.filter(card => {
        return card.title.includes(searchTerm) || card.description.includes(searchTerm)
    })
    cardContainer.innerHTML = generateCards(filteredCards)
}

