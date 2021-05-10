# Pinterest- React

Your team has been tasked with recreating pinterest.

TLDR: users create boards and can pin urls to the boards

## Requirements
* Clean code - single responsibility principle
* ReactJS
* No errors - linters should be clean
* SASS/Bootstrap/Reactstrap for styling
* Completely planned out - before each section you should be making new cards before you code.  You should have wireframes and an ERD

## Parts

### Part 1: ERDs and Authentication
NOTE: You should have already done the ERD with the Webpack Pinterest Project
Feel Free to use the same one.

* Create an ERD for pinterest
* Create a repo
* Create a setup branch
* Do all the stuff needed when setting up the project. These include making the updates to the `.env` file
  * Create a new firebase project, database, and enable google authentication, etc.
* Create an authentication branch and add a navbar with logout button, and place the google login button somewhere for you to test
  * **Note: There are components that you can use to get started and style later. We just want you to get your auth setup by yourself.**
* When your user is **logged out** they should see the navbar with only a brand.  And an h1 on the page that says PINTEREST (make a `home` component for this)
* When your user is logged in they should see a navbar with a brand and a logout button and an H1 on the page that says Boards (make a `boards` component for this)

### Part 2: READ
#### Setup
* Create some json data
* Import that data into firebase

#### User Stories
- As a user, when I am logged in and the page loads, I should see all the boards that belong to me.
- As a user, when I click on one of my boards, I should see a single board view that shows all pins for that board.
- As a user, when I am on the single board view, there should be some way to go back to all my boards.

### Part 3: DELETE
- As a user, I should be able to delete a pin from one of my boards.
- As a user, I should be able to delete one of my boards.
- As a user, when I delete one of my boards all pins that were on that board should be deleted as well.

### Part 4: CREATE
- As a user, I should be able to create a new pin.
  - pins should be able to be marked private
- As a user, I should be able to create a new board.
  - boards should be able to be marked private

### Part 5: UPDATE
- As a user, I should be able to change which board a pin belongs to.

### Part 6: Deploy and Readme
- As a user I should be able to use your app on the internet - it should be deployed using Netlify.
- As a developer, I want to see an amazing README for this project.

## Stretch
### As an authenticated user:
  - when I navigate to the Home page of the app, I should be able to see all public pins from other users
  - I should be able to pin any public pin to one of my boards
  - I should be able to share PUBLIC boards
  - If I share a URL to a PUBLIC board, the person recieving the URL should be able to view that board and all the pins associated with that board. (HINT: You may want to create a special route that is not private)

### As an unauthenticated user:
  - when I navigate to the app, I should be able to see all public pins from other users
  - If I try to pin one of the public pins, I should be prompted to login
  - If a user shares a URL to a board, I should be able to view that board and all the pins associated with that board. (HINT: You may want to create a special route that is not private)

### Extra Goodies
- Allow users to upload images. Not just paste a URL for image.
- Allow users to signup/login with another Authentication method from Firebase. Your choice. This will take some digging into the docs. Example: [signInWithPopup()](https://firebase.google.com/docs/auth/web/github-auth#handle_the_sign-in_flow_with_the_firebase_sdk) (GitHub linked, other OAuth providers are listed in the left sidebar).

## Firebase Docs
- Perform an action as soon as user logs in or out with the [onAuthStateChanged event listener](https://firebase.google.com/docs/auth/web/manage-users#get_the_currently_signed-in_user)
