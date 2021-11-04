# Interview Scheduler

Interview Scheduler is a single page application built using React. 
This is a single page web application allows users to book interview with mentors during the week. 
In order to book appointment user should povide name, select day, time and interviewer (from the list) and save application form.


This app was built using React App  
Data is persisted by the API server using a PostgreSQL database. The client application communicates with an API server over HTTP, using the JSON format. 

React components were built in isolation using Storybook.

For testing purposes were used : 

Eslint-static test;
Jest - for unit and integration tests  
Cypress for unit, integration and end-to-end testing.


## Screenshots

1. Main Interview Scheduler Interface
!["Main Interview Scheduler Interface"](https://github.com/tonyloba/scheduler/blob/master/docs/main_page.png)

2. Choose day for interview appointment
!["Choose day for appointment"](https://github.com/tonyloba/scheduler/blob/master/docs/choose_day.png)

3. Create interview appointment
!["Create appointment"](https://github.com/tonyloba/scheduler/blob/master/docs/create_interview.png)

4. Edit interview appointment
!["Edit appointment"](https://github.com/tonyloba/scheduler/blob/master/docs/edit_interview.png)

5. Delete interview appointment
!["Delete appointment"](https://github.com/tonyloba/scheduler/blob/master/docs/delete_interview.png)


## Setup

- Install all dependencies (using the `npm install` command).
- Run the development web server using the `npm start` command.
- Open in your browser [http://localhost:8000/](http://localhost:8000/)
- NOTE: If you want to run your entire application in development mode: use webpack-dev-server . Please use an API to retrieve and render data [https://github.com/lighthouse-labs/scheduler-api](https://github.com/lighthouse-labs/scheduler-api)

## Technologies

- HTML
- SCSS
- Javascript
- Node
- PostgreSQL
- Axios
  
  Testing:
- Jest(test)
- StoryBook
- Cypress


## Dependencies

Interview Scheduler requires Node.js and Postgres and the following NPM packages are used:

- React
- React-dom
- React-scripts
- Axios
- Normalize.css
- Classnames
- React Testing Library

## Running Webpack Development Server

```sh
npm start
```

## Run the API server in test mode:

```sh
npm run test:server
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
