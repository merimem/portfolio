const users=[{username:"toto", age:12},{username:"tata", age:20},
{username:"titi", age:28}]
const adults = users.filter( user =>user.age>18)
console.log(adults)