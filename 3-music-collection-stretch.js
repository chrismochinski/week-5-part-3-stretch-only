console.log('***** Music Collection *****')

console.log(' '); //create space for testing - hope I remember to delete this later!

let collection = []; //create array collection which is empty (...but not for long!)

//----------building addToCollection function--------------------

function addToCollection( title, artist, yearPublished, tracks){ //begin function to add album to collection
    let album = { //creating album object
      t: title, //assign t dot operator title parameter/argument
      a: artist, //assign a dot operator album parameter/argument
      y: yearPublished, //assign y dot operator yearPublished parameter/argument
      tr: tracks } //assign tr dot operator for "track listing" - first five only, for test sake
    collection.push(album); //push album to collection
    return album; //return the album based on the three arguments
} //end addToCollection function


console.log('Added:', addToCollection('Smash', 'Offspring', 1994, ['Time To Relax', 'Nitro', 'Bad Habit', 'Gotta Get Away', 'Genocide'])); //adding album #1
console.log('Added:', addToCollection('Dizzy Up The Girl', 'Goo Goo Dolls', 1998, ['Dizzy', 'Slide', 'Broadway', 'January Friend', 'Black Balloon'])); //adding album #2
console.log('Added:', addToCollection('5150', 'Van Halen', 1986)); // etc for four more......
console.log('Added:', addToCollection('Diver Down', 'Van Halen', 1982));
console.log('Added:', addToCollection("This One's For You", 'Barry Manilow', 1976));
console.log('Added:', addToCollection('Carnival Of Carnage', 'Insane Clown Posse', 1992));

console.log(' '); //create space for testing - hope I remember to delete this later!

for(let items of collection){ //create quick for of loop to show albums more cleanly (hopefully that's ok)
  console.log(items); //log the array as explained
}

console.log(' '); //create space for testing - hope I remember to delete this later!

// ----------building showCollection function--------------------

function showCollection(music){ //create showCollection function with parameter music
  console.log('Number of albums:', music.length); //log out the number of albums in the collection
  for(i=0; i < music.length; i++){
    console.log('"'+music[i].t+'" by', music[i].a ,'published in', music[i].y);
  }
}
showCollection(collection); //send collection array to music in showCollection function

console.log(' '); //creating a little space for console clarity...need to find a better way to do this...


// ----------building findByArtist function--------------------

function findByArtist( artist ){ //create findByArtist array
  let artistSearch = []; //create artistSearch array variable
  for(i=0; i<collection.length; i++){ //looping to check collection list for artist
    if(artist === collection[i].a){ //if artist name is equal to any name in the a dot operator of the array...
      artistSearch.push(collection[i].a) //...then add that artist name to the artistSearch array
      // return artistSearch;
    } //end if artist is in collection statement
  } //end loop checking if artist in collection
  return artistSearch;
} //end findByArtist function

console.log(' '); //creating a little space for console clarity...need to find a better way to do this...

console.log( 'Looking for "Van Halen" -', findByArtist( 'Van Halen' ));
console.log( 'Looking for "Offspring" -', findByArtist( 'Offspring' ));
console.log( 'Looking for "Smashing Pumpkins" -', findByArtist( 'Smashing Pumpkins' ));
console.log( 'Looking for "Insane Clown Posse" -', findByArtist( 'Insane Clown Posse' ));

console.log(' '); //creating a little space for console clarity...need to find a better way to do this...

//----------STRETCH STUFF!!--------------------

function search( info ){ //create search function with info parameter
  let content = []; //create empty array called content
  for(i=0; i<collection.length; i++){ //looping to check collection list for artist
    if(info.artist === collection[i].a && info.year === collection[i].y){ // if the artist property of the argument object is equal to the a dot operator in [i] array of the collection AAAANNNNDDDD the year object property is equal to the y dot operator in the collection...
      content.push(info.artist, info.year); //...then push these into the content array
    } //end conditional
    if(info.artist == null){ //if the argument is blank
      return collection; //return the original collection
    } // end if blank
  } //end for loop
  return content; //return content array
} //end search function

console.log(search({ artist: 'Ray Charles', year: 1957 })); //sending arguments as anonymous object with properties artist and year
console.log(search({ artist: 'Offspring', year: 1994 })); //sending arguments as anonymous object with properties artist and year
console.log(search({ artist: 'Tonic', year: 1998 })); //sending arguments as anonymous object with properties artist and year
console.log(search({      }));
console.log(search({ artist: 'Insane Clown Posse', year: 1992 })); //sending arguments as anonymous object with properties artist and year
console.log(search({ artist: 'Van Halen', year: 1985 })); //sending arguments as anonymous object with properties artist and year
console.log(search({}));
