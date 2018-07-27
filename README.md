![image](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)
# GA WDI-34  Project #3: A MEAN stack Application
## 'What's In My Fridge?'


 - Linda Lê
 - Natasha Ramburrun
 - Rachel Dolan


 What's in your fridge application has been designed and developed by Linda Le, Rachel Dolan and Natasha Ramburrun. The idea is that users can search on the app for recipes based on the ingredients they already have at home, for convenience and to cut down on wastage.

 <p align="center"><img src='src/assets/images/project-3-home.gif'></p>

 The project was planned using the project management tool trello, and we devised the user experience using wireframes on draw.io.  

 ### The Build


Our application was built around the spoonacular API which was central to our idea. Using this API allowed us to search by ingredients and list all the relevant recipes. The API also enables the user to filter by their dietary requirements as well as using autocomplete functionality to make the process of searching smoother and avoid incorrect data from being inputted.

 <p align="center"><img src='src/assets/images/project-3-search.gif'></p>

 Our app uses a RESTful design pattern; users can visit their profile page, create and delete comments/ratings, favourite and unfavourite recipes, search for new recipes and view individual recipe pages for more information.

  <p align="center"><img src='src/assets/images/project-3-profile.gif.gif'></p>

 ### Challenges

Initially we wanted to be able to organise recipes based on the number of missing or included ingredients, but too late into the project we realised that the type of request we were making didn't include this information. We were able to include it in a subsequent request made to the API based on an individual recipe.

  <p align="center"><img src='src/assets/images/project-3-recipe-show.gif'></p>

We were able to add another filter feature which allows the user to input any dietary requirements, including pescatarian, gluten-free etc.

  <p align="center"><img src='src/assets/images/project-3-search-filter.gif'></p>

Throughout the process we also encountered some challenges using the API, including incorrect and inconsistent data.

 ### Extra Features

Moving forward I'd like to add comment moderation, include Facebook OAuth (something we started but had to leave behind because of changes to privacy settings), a randomly generated recipe inspiration page, and allow users to organise recipes by ratings.
