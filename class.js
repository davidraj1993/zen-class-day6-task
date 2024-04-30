class Movie{
            constructor(){
                this.title = 'title';
                this.studio = 'studio';
                this.rating = 'rating';
        }    
}


let movie1 = new Movie();
let movie2 = new Movie();
let movie3 = new Movie();

movie1.title = 'Casino Royale';
movie1.studio = 'Eon Production';
movie1.rating = 'PG13';

movie2.title = 'Rolse Royale';
movie2.studio = 'Royal Production';
movie2.rating = 'PG12';

movie3.title = 'Marathon';
movie3.studio = 'Elite Production';
movie3.rating = 'PG10';



console.log(movie1);
console.log(movie2);
console.log(movie3);