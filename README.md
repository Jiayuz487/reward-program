# Reward Program

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirements

A retailer offers a rewards program to its customers, awarding points based on each
recorded purchase. 
 
A customer receives 2 points for every dollar spent over $100 in each transaction, 
plus 1 point for every dollar spent between $50 and $100 in each transaction.
(e.g., a $120 purchase = 2x$20 + 1x$50 = 90 points).
 
Given a record of every transaction during a three-month period, calculate the 
reward points earned for each customer per month and total.

## Project Notes

### API

* ```getAllTransInPastThreeMonths```: An asynchronous API used to fetch transactions during a three-month period. API call always successes.

### Components

* ```Alert```: Displays an error message in a way that attracts the user's attention without interrupting the user's task.

* ```SelectGroup```: A wrapper used to group two selects, one for customer and one for the time period.

* ```TransactionTable```: A table displaying transactions with selected options. 

### Hooks

* ```useQuery```: Simplifies the process of making asynchronous requests, caching the data, and handling loading, error states.

## Available Scripts

In the project directory, you can run:

### npm start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### npm test

Launches the test runner in the interactive watch mode.