/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // Create an object to store total spending per category
  const categoryTotal = {};

  // Iterate through each transaction
  transactions.forEach((transaction) => {
    // Check if the category already exists in the categoryTotal object
    if (categoryTotal.hasOwnProperty(transaction.category)) {
      // If the category exists, add the price of the transaction to the total spending for that category
      categoryTotal[transaction.category] += transaction.price;
    } else {
      // If the category does not exist, initialize it with the price of the transaction
      categoryTotal[transaction.category] = transaction.price;
    }
  });

  // Convert the categoryTotal object into an array of objects
  const result = Object.keys(categoryTotal).map((category) => ({
    category: category,
    totalSpent: categoryTotal[category],
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;
