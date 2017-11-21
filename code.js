function renderMovie(movie){
    document.getElementById("movieTitle").innerText = movie.title;
    document.getElementById("movieImg").setAttribute("src", movie.picUrl);
    document.getElementById("movieDescription").innerText=movie.description;


    let actors="";
    for (let index = 0; index < movie.actorList.length; index++) {
        actors+="<li>"+movie.actorList[index]+"</li>";
    }


    document.getElementById("movieActors").innerHTML=actors;

};

renderMovie(movieData);