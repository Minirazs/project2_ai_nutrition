

//3 search bars
//let apiKey = "1b403f52a7964470963e3e30543d59da";
let apiKey = "9a1edd91ee7844eabd6b0d08033d88b3";

//1) Upload image - image analyser
$(document).ready(function () {
        
  $("#submit").on("click", function (e) {
      e.preventDefault();

      //Clear screen
      $("#nutrition-result").empty();
      $("#similar-recipes").empty(); 
       
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
        "data": form,
        "beforeSend": function(){
          // Handle the beforeSend event
          $('#image').show();
        }

      };//end settings
      
      $.ajax(settings).done(function (response) {

        $('#image').hide();
        //show nutritional info
        var responseJSON = JSON.parse(response);

        //nutrition values display
        $("#nutrition-result").append(`
  
        <h4 id="img-space">This image is most likely a ${responseJSON.category.name}! Here are its nutritional values: </h4>
        
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
        
        <h4 class = "entries">Below are the most related recipes that you can try out! ${responseJSON.recipes.length} recipes found!
        <br> I can analyse 50 dishes from images, click here for <a href="https://spoonacular.com/food-api/docs#Image-Classification-Categories" target="_blank" title="Food images I can analyse!">the full list</a>. 
        <br> If the results from image analysis are inaccurate, try typing the dish in <a href="#name-search" title="Search again!"> Option 3 </a> that has a wider recipe database! 
        </h4>`);

        //Find similar recipes
        for (let i = 0; i < responseJSON.recipes.length; i++) {
          console.log(responseJSON.recipes[i].id);
          console.log(responseJSON.recipes[i].title);
          console.log(responseJSON.recipes[i].url);

          let params0 = {
            "apiKey": apiKey,
            "includeNutrition" : false
          };

          //Retrieve more info from individual ID
          let oneURL = `https://api.spoonacular.com/recipes/${responseJSON.recipes[i].id}/information`
        
          //show recipe information of the ID 
          axios.get(oneURL,{
            "params": params0
          }).then(function (response) {

            var oneRecipe = response;

            $("#similar-recipes").append(`
              <a href="${oneRecipe.data.sourceUrl}" target="_blank">
                <div class="card" style="max-width: 540px;">
                  <img src="${oneRecipe.data.image}" class="card-img-top" alt="View Recipe!">
                  <div class="card-body">
                    <h5 class="card-title">${oneRecipe.data.title}</h5></a>
                    <p class="card-text">${oneRecipe.data.summary}</p>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">Health score: ${oneRecipe.data.healthScore}  
                    <button type="button" id="help" class="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="100 is perfect score on how easily the recipe can be made and if it's highly nutritious. 0 for the worst recipe">
                    ? </button> </small>
                  </div>
                </div>
             

            `);

          }); //end axios

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

    //Clear screen
    $("#nutrition-result").empty();
    $("#similar-recipes").empty(); 

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
       $("#nutrition-result").append(`
       
       <img src="${imageURL}" style="max-width: 540px;" class="img-target" alt="Your image analysed!">

       <h4>This image is most likely a ${responseJSONurl.category.name}! Here are its nutritional values: </h4>
       
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

       <h4 class = "entries">Below are the most related recipes that you can try out! ${responseJSONurl.recipes.length} recipes found!
        <br> I can analyse 50 dishes from images, click here for <a href="https://spoonacular.com/food-api/docs#Image-Classification-Categories" target="_blank">the full list</a>. 
        <br> If the results from image analysis are inaccurate, try typing the dish in Option 3 that has a wider recipe database! 
        </h4>`);

       for (let i = 0; i < responseJSONurl.recipes.length; i++) {
        console.log(responseJSONurl.recipes[i].id);
        console.log(responseJSONurl.recipes[i].title);
        console.log(responseJSONurl.recipes[i].url);

        let params5 = {
          "apiKey": apiKey,
          "includeNutrition" : false
        };

        //Retrieve more info from individual ID
        let secURL = `https://api.spoonacular.com/recipes/${responseJSONurl.recipes[i].id}/information`
      
        //show recipe information of the ID 
        axios.get(secURL,{
          "params": params5
        }).then(function (response) {

          var secRecipe = response;

          $("#similar-recipes").append(`
            <a href="${secRecipe.data.sourceUrl}" target="_blank">
              <div class="card" style="max-width: 540px;">
                <img src="${secRecipe.data.image}" class="card-img-top" alt="View Recipe!">
                <div class="card-body">
                  <h5 class="card-title">${secRecipe.data.title}</h5></a>
                  <p class="card-text">${secRecipe.data.summary}</p>
                </div>
                <div class="card-footer">
                   <small class="text-muted">Health score: ${secRecipe.data.healthScore}
                    <button type="button" id="help" class="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="100 is perfect score on how easily the recipe can be made and if it's highly nutritious. 0 for the worst recipe">
                    ? </button> </small>
                </div>
              </div>
           

          `);

        }); //end axios

      }; // end FOR


    });
  });
});


// 3) Search recipe by name

let apiURL = "https://api.spoonacular.com/recipes/complexSearch";

//document ready then go
$(function(){

  //attach event listener
  $("#search-btn3").on("click", function(){

    //Clear screen
    $("#nutrition-result").empty();
    $("#similar-recipes").empty(); 

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

      console.log(response.data.results[0]);
      let resultLength = response.data.results.length;

      for (let y = 0; y < resultLength; y++) {

        let params2 = {
          "apiKey": apiKey,
          "includeNutrition" : false
        };

        document.getElementById("nutrition").innerHTML = "Nutrition & Recipe Search by text input";

        //retrieve and display nutrition only for the closest match
        if (y == 0) {
          let params3 = {
            "apiKey": apiKey,
            //"includeNutrition" : false
          };
    
          //search by ID and display search information & use GET to retrieve info using ID
          let widgetURL = `https://api.spoonacular.com/recipes/${response.data.results[y].id}/nutritionWidget.json`;

          axios.get(widgetURL,{
            "params": params3
          }).then(function (response) {

            $("#nutrition-result").append(`
              <h4> You searched for <b>${searchTerms}</b>! Here are its nutritional values: </h4>

              <li>
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

              <h4 class = "entries">These are the most related recipes that you can try out! ${resultLength} recipes found!</h4>
            `) //end append
          });//end axios
        };//end IF

        //Retrieve more info from individual ID
        let thirdURL = `https://api.spoonacular.com/recipes/${response.data.results[y].id}/information`
      
        //show recipe information of the ID 
        axios.get(thirdURL,{
          "params": params2
        }).then(function (response) {

          var thirdRecipe = response;

          $("#similar-recipes").append(`
            <a href="${thirdRecipe.data.sourceUrl}" target="_blank">
              <div class="card" style="max-width: 540px;">
                <img src="${thirdRecipe.data.image}" class="card-img-top" alt="View Recipe!">
                <div class="card-body">
                  <h5 class="card-title">${thirdRecipe.data.title}</h5></a>
                  <p class="card-text">${thirdRecipe.data.summary}</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Health score: ${thirdRecipe.data.healthScore}
                    <button type="button" id="help" class="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="100 is perfect score on how easily the recipe can be made and if it's highly nutritious. 0 for the worst recipe">
                    ? </button> </small>
                </div>
              </div>
           

          `);

        }); //end axios

      }

    });

    
  });//end eventlistener
});//end function