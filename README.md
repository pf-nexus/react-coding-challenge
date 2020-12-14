### React Coding Challenge

## Overview 

This code challenge will test your skills in react.js, CSS, testing and modular design.

The challenge is timeboxed. Spend no longer than 1 hour on it. 


## Submission 

Begin by forking this repository to your own GitHub account. When you're done, create a Pull Request and invite me to it to review. 

### The challenge 


The purpose of the application is to correctly render a stream of messages coming from an api. Different messages will be coded different colors and require slightly different rendering. The rules are described in detail below.

This challenge already includes an API response. It is not required or expected for you to make any changes to this interaction.

The 3 priorities that we provide you are:
  * 1 = error
  * 2 = warning
  * 3 = info

## Tasks 

1. Messages should be rendered in a table-like structure. The newest messages should appear at the top of their respective columns.

The UI should be similar to the mockup below. 
![Example Design](https://github.com/pf-nexus/react-coding-challenge/raw/main/grid.png)

2. The messages should be color coded depending on the priority of the message. The appropriate color per priority is:

   * error: #F56236
   * warning: #FCE788
   * info: #88FCA3

3. Each time a message with the priority level of error is received, a snackbar containing the error message should also appear at the top of the application. The error should disappear in 2 seconds, when another error message takes its place, or when the user clears it via the provided button located in the error message.

4. A user should be able to clear all messages at any point.


5. A user should be able to clear a specific message in a specific column


6. A user should be able to start and stop incoming messages. By default the messages should be running and displaying on the grid. The start/stop button should update depending on the state of the feed.

7. A user should see a count of specific messages in each column


## Rules and assessment 

1. Write clean code and well explained commit messages. 

2. Use Tailwind CSS and material-ui components. Don't worry, you will not be assessed on your design abilities. 

3. Test your application to the degree that you feel comfortable with. No specific testing frameworks are required. We have left a failing test for a breadcrumb.

## Bonus Points
You can receive bonus points for no errors/warnings with ESLint (ES5/JSX) and for following the AirBnB style guide. 
* [JavaScript Style Guide](https://github.com/airbnb/javascript)
* [React Style Guide](https://github.com/airbnb/javascript/tree/master/react)
The suggested implementation is to use a `.eslintrc.json` file. Read more at [eslint.org](http://eslint.org/)


## Installation and running  

Use Brew to install Node and node package manager (NPM).  

```bash
brew install node
```

Then install the dependencies. 

```bash
npm install
```

```bash
npm run start 
```


## Finally 

That's it. Don't forget to send me a pull request when you're done. 
