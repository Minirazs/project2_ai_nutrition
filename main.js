


// Search recipe by name
let apiKey = "1b403f52a7964470963e3e30543d59da";
let apiURL = "https://api.spoonacular.com/recipes/complexSearch";


//document ready then go
$(function(){

  //attach event listener
  $("#search-btn").on("click", function(){
    //retrieve search terms
    let searchTerms = $("#search-terms").val();
    //set search parameters
    let params = {
      "apiKey": apiKey,
      "query" : searchTerms
    };

    axios.get(apiURL,{
      "params": params
    }).then(function(response){
        console.log(response);
        for (let recipe of response.data){
          $("#search-results").append(`<li class=''>
           ${recipe.title} 
          <img src="${recipe.image}"></li>`);
        }
        //create pagination.... 


        $("#search-total").text(`Total Results: ${response.data.totalResults}`);


    })//end axios


  });//end eventlistener

})