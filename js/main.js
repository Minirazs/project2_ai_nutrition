//1) Upload image - image analyser
$(document).ready(function () {
        
  $("#submit").on("click", function (e) {
      e.preventDefault();
       
      var form = new FormData();
      const fileInput = document.querySelector('#file') ;//fileinput html id
      form.append("file", fileInput.files[0]);
      
      var settings = {
        "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/images/analyze",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
          "x-rapidapi-key": "78b2ea268dmshee72c979693c987p1db077jsn653a0bf426b1"
        },
        "processData": false,
        "mimeType": "multipart/form-data",
        "contentType": false,
        "data": form
      };//end settings
      
      $.ajax(settings).done(function (response) {
        //show nutritional info
        var responseJSON = JSON.parse(response);

        //nutrition values display
        $("#nutrition-result").append(`
        <h4>This image is most likely a ${responseJSON.category.name}! </h4>
        
        <li>
          <span class="category">CALORIES</span>
          <span class="value">${responseJSON.nutrition.calories.value}</span>
        </li>
        <li>
          <span class="category">FAT</span>
          <span class="value">${responseJSON.nutrition.fat.value}</span>
        </li>
        <li>
          <span class="category">PROTEIN</span>
          <span class="value">${responseJSON.nutrition.protein.value}</span>
        </li>
        <li>
          <span class="category">CARBOHYDRATES</span>
          <span class="value">${responseJSON.nutrition.carbs.value}</span>
        </li>
        
        <h4>Here are some interesting recipes you can try out! </h4>`);

        //similar recipes
        for (let i = 0; i < responseJSON.recipes.length; i++) {
          console.log(responseJSON.recipes[i].title);
          console.log(responseJSON.recipes[i].image);
          console.log(responseJSON.recipes[i].url);

          $("#similar-recipes").append(
          // `<li class=''>
          // <a href="${responseJSON.recipes[i].url}" target="_blank">${responseJSON.recipes[i].title}</a></li>`);

          `<div class="card text-center w-30">
            <div class="card-body">
              <h5 class="card-title">
                <a href="${responseJSON.recipes[i].url}" target="_blank">${responseJSON.recipes[i].title}
                </a>
              </h5>
            </div>
          </div> `);

        };
      });

      //show progress bar under nutrition result ID
      //document.getElementById("nutrition-result").innerHTML = html;
  });
});//end jquery

//2) Analyse the image using URL
$(function(){

  //attach event listener
  $("#search-btn2").on("click", function(){
    //retrieve imageURL
    let imageURL = $("#search-url").val();
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/images/analyze?imageUrl=${imageURL}`,
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": "78b2ea268dmshee72c979693c987p1db077jsn653a0bf426b1"
      }
    }
    
    $.ajax(settings).done(function (response) {

       console.log(response);
       //show nutritional info
       var responseJSONurl = response;
       
       //nutrition values display
       $("#URL-result").append(`
       <h4>This is most likely a ${responseJSONurl.category.name}! </h4>
       
       <li>
         <span class="category">CALORIES</span>
         <span class="value">${responseJSONurl.nutrition.calories.value}</span>
       </li>
       <li>
         <span class="category">FAT</span>
         <span class="value">${responseJSONurl.nutrition.fat.value}</span>
       </li>
       <li>
         <span class="category">PROTEIN</span>
         <span class="value">${responseJSONurl.nutrition.protein.value}</span>
       </li>
       <li>
         <span class="category">CARBOHYDRATES</span>
         <span class="value">${responseJSONurl.nutrition.carbs.value}</span>
       </li>
       
       <h4>Here are some interesting recipes you can try out! </h4>`);

       //similar recipes
       for (let i = 0; i < responseJSONurl.recipes.length; i++) {
         console.log(responseJSONurl.recipes[i].title);
         console.log(responseJSONurl.recipes[i].image);
         console.log(responseJSONurl.recipes[i].url);

         $("#URL-similar-recipes").append(`<li class=''>
        <a href="${responseJSONurl.recipes[i].url}" target="_blank">${responseJSONurl.recipes[i].title}</a></li>`);
        }
    });


  });

});


// 3) Search recipe by name
let apiKey = "1b403f52a7964470963e3e30543d59da";
let apiURL = "https://api.spoonacular.com/recipes/complexSearch";


//document ready then go
$(function(){

  //attach event listener
  $("#search-btn3").on("click", function(){
    //retrieve search terms
    let searchTerms = $("#search-terms").val();

    //set search parameters
    let params = {
      "apiKey": apiKey,
      "query" : searchTerms
    };

    axios.get(apiURL,{
      "params": params
    }).then(function (response) {

      //store the closest recipe ID from the search
      let closestID = response.data.results[0].id;

      let params2 = {
        "apiKey": apiKey,
        //"includeNutrition" : false
      };

      document.getElementById("nutrition").innerHTML = "Recipe Search by text input";

      //search by ID and display search information & use GET to retrieve info using ID
      let widgetURL = `https://api.spoonacular.com/recipes/${closestID}/nutritionWidget.json`
        
        axios.get(widgetURL,{
          "params": params2
        }).then(function (response) {
          
         //Display nutritional value of the recipe (closestID)
         $("#nutrition-widget").append(`<li>
          <span class="category">CALORIES</span>
          <span class="value">${response.data.calories}</span>
        </li>
        <li>
          <span class="category">FAT</span>
          <span class="value">${response.data.fat}</span>
        </li>
        <li>
          <span class="category">PROTEIN</span>
          <span class="value">${response.data.protein}</span>
        </li>
        <li>
          <span class="category">CARBOHYDRATES</span>
          <span class="value">${response.data.carbs}</span>
        </li>
          
        <h4>Here are some interesting recipes you can try out! </h4> `);
        })

        let params3 = {
          "apiKey": apiKey,
          "includeNutrition" : false
        };

        let recipeURL = `https://api.spoonacular.com/recipes/${closestID}/information`
        
        //show recipe information of the closestID with link to recipe
        axios.get(recipeURL,{
          "params": params3
        }).then(function (response) {
          
          $("#recipe-info").append(`
           ${response.data.title} 
           <a href="${response.data.sourceUrl}" target="_blank" alt="View Recipe!"><img src="${response.data.image}"></a>`);
         
        })

        //find similar recipes to the closestID
        let params4 = {
          "apiKey": apiKey,
          "includeNutrition" : false
        };

        let similarURL = `https://api.spoonacular.com/recipes/${closestID}/similar`
        
        //show recipe information of the closestID with link to recipe
        axios.get(similarURL,{
          "params": params4
        }).then(function (response) {
          console.log(response);
          
          //similar recipes based on the closestID
          for (let y = 0; y < response.data.length; y++) {

          $("#similar-info").append(`<li class=''>
          <a href="${response.data[y].sourceUrl}" target="_blank">${response.data[y].title}</a></li>`);

          }
         
        })


        //show all search results 
        for (let recipe of response.data.results){
          $("#search-results").append(`<li class=''>
           ${recipe.id} 
           ${recipe.title} 
          <img src="${recipe.image}"></li>`);
        }
        //create pagination.... 


        $("#search-total").text(`Total Results: ${response.data.totalResults}`);


    })




  });//end eventlistener
})//end function