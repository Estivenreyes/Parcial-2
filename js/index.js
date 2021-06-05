const db = firebase.database();

const movieContainer = document.querySelector('.movieContainer');

db.ref('Movies').on('value',function(data){

   
    movieContainer.innerHTML = '';
    data.forEach(
        movie =>{
            let value = movie.val();
            let line = new MoviesElements(value);
            movieContainer.appendChild(line.render());
        }
    );
});