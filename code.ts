
// let movieData = require("./data");
import {movieData} from './data';
import * as $ from "jquery";

import { Review } from "./interfaces";
function renderMovie(data: Review){
    $("#movieTitle").text(data.title);
    $("#movieImg").attr("src", data.picUrl);
    $("#movieDescription").text(data.description);
    
    $("#movieActors").empty();
    
      for(let i=0; i<data.actorList.length; i++){
    
        $("#movieActors").append("<li>"+data.actorList[i]+"</li>");
    

        // append("<li>" + data.actorList[i] + "</li>");
      }

}


renderMovie(movieData);


// function renderMovie(data: Review){
//   // truncated
// }
// function renderMovie(movie){
//     document.getElementById("movieTitle").innerText = movie.title;
//     document.getElementById("movieImg").setAttribute("src", movie.picUrl);
//     document.getElementById("movieDescription").innerText=movie.description;


//     let actors="";
//     for (let index = 0; index < movie.actorList.length; index++) {
//         actors+="<li>"+movie.actorList[index]+"</li>";
//     }
//     document.getElementById("movieActors").innerHTML=actors;

// };

renderMovie(movieData);


function changeStarRating(rating){
    
      $(".filledStar").removeClass("filledStar");
    
      for(let i=1; i<=rating; i++){
    
        $("[data-rating-id=" + i + "]").addClass("filledStar");
    
      }
    
    }
    
    
$(".starRating").on("click", "span", function(e){
    
      let star = $(e.target);
    
      let rating = parseInt(star.attr("data-rating-id"));
    
      changeStarRating(rating);
    
    });

// function changeStarRating(rateId){
// for (let index = 1; index <= 5; index++) {
//     let star=document.getElementById("star"+index);
//     if(index<=rateId)
//     {
//         star.classList.add("filledStar");
//     }
//     else
//     {
//         star.classList.remove("filledStar");
//     }
    
// }
// };

