const users = [
    {id: 1, username: 'user1', email: 'user1@example.com', firstName: 'John', lastName: 'Doe', age: 30},
    {id: 2, username: 'user2', email: 'user2@example.com', firstName: 'Jane', lastName: 'Doe', age: 25},
    {id: 3, username: 'user3', email: 'user3@example.com', firstName: 'Bob', lastName: 'Smith', age: 22},
    {id: 4, username: 'user4', email: 'user4@example.com', firstName: 'Alice', lastName: 'Johnson', age: 28},
    {id: 5, username: 'user5', email: 'user5@example.com', firstName: 'Charlie', lastName: 'Brown', age: 33},
    //...
    // Example for brevity. Imagine this pattern continues for users 6 through 100
];

// Filling in the rest of the 100 users
for (let i = 6; i <= 100; i++) {
    users.push({
        id: i,
        username: `user${i}`,
        email: `user${i}@example.com`,
        firstName: `FirstName${i}`,
        lastName: `LastName${i}`,
        age: Math.floor(Math.random() * 60) + 18
    });
}

console.log(users);