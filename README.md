# Friend Finder
---
- **For:** Northwestern Coding Bootcamp
- **Developer:** Kat Eng
- **Deployment Date** 12/06/2018
- **Built With** Node.js, Javascript, Express

### Description & Requirements
---
A "Good Place" themed Express web application that collects information from the user via survey, compares the users answers against a database of other users, and and uses the difference to compare and match them with their "Soul Mate".


**Before you get started, make sure you have these node packages installed:**
1. **Express:** A fast and minimalist web framework for node.

     *Command Line: 'npm install express'*


2. **Path:** - A node package that will allow you to set back end routes to your pages.

     *Command Line: 'npm install path'*

3. **nodemon:** - (*Optional*) A super useful tool when working and testing local servers. This package automatically refreshes your server everytime a change is saved within your code, eliminating the need to manually restart your server when logging changes. The only change the user has to make is when starting your server from the command line, you write *nodemon* rather than  *node* followed by your file name.

    *Command Line: 'npm install nodemon'*   


Read more about these methods [here](https://www.npmjs.com/)



### Functionality
--- 
1. The opening page welcomes the user and invites them to take the quiz. Below the survey button, there is also an option to see the API data package as well as my github repository

    ![image of concertThis](/app/public/images/friendfinder)

2. The quiz screen requires the user to input their name and an image link, and presents the quiz questions. The questions were created using native HTML to create the form,

    ![image of spotifyThis](/app/public/images/quiz-screen)


3. movie-this
  *<command, movie name>*

    Function takes the userInput (command) and the userQuery(song), and returns title, cast, release date, ratings, country of origin, original language and synopsis.
    ![image of movieThis](/images/movieThis.png)
    ![image of movie-this](/images/movie-this.png)


4. do-this

      *<command>*

    This function is a wildcard that will randomly select one of the functions and produce a search. The only way to find out what it does is to try!


    ![image of doThis](/images/doThis.png)
    ![image of do-this](/images/do-this.png)



### Notes
---
This is my first back end project and I am super happy with it. If I were to go back I would probably try to implement node geocoder to translate the coordinates into an address. It might be something that I come back to after the course is finished.
