# Implement a Simple Order Checkout Process with a Mock Database in Node.js

This is a Node.js project that how to create a simple order checkout process for an e-commerce application using a mock database. The project uses Express to create API routes for retrieving products and creating orders.

## Getting Started
1. Clone the repository
   ```sh
   git clone https://github.com/HusseinMoHu/appenza.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

## Usage
To start the project run the following command:
   ```sh
   npm run [command]
   ```
   Where [command] is one of the following:

   * `dev`: Run the project in development mode.
   * `start`: Run the project in production mode.
   * `build`: Build the project.
   * `prettier`: Run prettier.
   * `lint`: Run eslint.
   * `lint:fix`: Run eslint and fix errors.

## Running Tests
You can run tests by following these steps:
1. Run NPM test script:
   ```sh
   npm test
    ```

## Mock Database
The mock database is an in-memory array that stores product and order data. The products array contains objects with the following properties:
- id: a unique identifier for the product
- name: the name of the product
- price: the price of the product
- stock: the number of items in stock
  
The orders array contains objects with the following properties:
- id: a unique identifier for the order
- items: (array of objects containing product ID and quantity)
- total: the total price of the order
- timestamp: the date and time the order was created

## API Routes
The project has the following API routes:

### GET api/product
This route retrieves a list of all products, including their name, price, and stock.

### GET api/order
This route retrieves a list of all orders, including their items, total price, and timestamp.

### POST api/order
This route creates a new order. The request body should contain an array of items (each with a product ID and quantity). The server calculates the total cost of the order and updates the stock of the purchased products in the mock database.

## Error Handling
The API routes have validation and error handling to check if the product ID is valid and if there is enough stock to fulfill the order. If there is any issue with the order (e.g., invalid product ID or insufficient stock), the server returns an appropriate error message and status code.

## Middleware
The project also includes a simple middleware function to log incoming requests and their timestamps.

Postman collection: in `./postman_collection.json` file

## Conclusion
This project demonstrates how to create a simple order checkout process for an e-commerce application using a mock database in Node.js. It covers core concepts such as Express, API routes, error handling, and middleware.