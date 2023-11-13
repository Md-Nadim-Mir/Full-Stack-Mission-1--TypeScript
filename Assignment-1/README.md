# Explore-basic-typescript-simple-assignment-Md-Nadim-Mir(l2b2a1)

## Interview Question added

# 1. What are some benefits of using TypeScript over JavaScript in a project?

 :balloon: Static typing: TypeScript is a statically typed language, which means that the types of variables and expressions are checked at compile time. This can help to catch many errors early on, before they cause problems in production.

 :balloon: Better tooling: TypeScript has excellent tooling support, including IDE integration, code completion, and type checking. This can make it easier and more efficient to write and maintain code.

 :balloon: Improved maintainability and scalability: TypeScript code is generally more maintainable and scalable than JavaScript code, due to static typing and the use of namespaces and modules.

 :balloon: Better interoperability: TypeScript code is fully interoperable with JavaScript code, which means that it can be used in any existing JavaScript project.


# 2.What is the purpose of the optional chaining (?.) and nullish coalescing (??) operators in TypeScript, and how do they work? Provide an example for each


👍 The optional chaining operator (?.) allows you to access properties of an object or call methods of a function without having to check for null or undefined first. This can help to make your code more concise and readable.

To use the optional chaining operator, simply place a question mark (?).) after the property you want to access or the function you want to call. For example:

const user = {
  name: 'John Doe',
  age: 30,
};

// Check if the user has a profile picture
const profilePictureUrl = user?.profilePicture?.url;




👍 Nullish Coalescing (??)

The nullish coalescing operator (??) allows you to specify a fallback value if an expression evaluates to null or undefined. This can be useful for avoiding errors when working with data that may be incomplete or missing.

To use the nullish coalescing operator, simply place two question marks (??) after the expression you want to check, followed by the fallback value. For example:


const user = {
  name: 'John Doe',
};

// Get the user's age, or default to 18 if the age property is not present
const age = user?.age ?? 18;


# 3.How do you handle asynchronous operations in TypeScript, and what are the advantages of using async/await over callbacks or Promises?

👍 Callbacks

Callbacks are functions that are passed as arguments to other functions and are executed when the other functions have completed their asynchronous operations. Callbacks can be difficult to read and maintain, especially when they are nested deep.

👍 Promises

Promises are objects that represent the eventual completion (or failure) of an asynchronous operation. Promises provide a more elegant way to handle asynchronous operations than callbacks by allowing you to chain multiple operations together and handle errors in a more controlled manner.

👍 Async/await

Async/await is a syntax that allows you to write asynchronous code in a more synchronous style. Async/await functions can use the await keyword to wait for other asynchronous operations to complete before continuing.



 👍 Async/await has the following advantages over callbacks and Promises:

:balloon: More readable and maintainable code: Async/await code is more readable and maintainable than code that uses callbacks or Promises, especially when the code is complex.

:balloon: Easier error handling: Async/await makes it easier to handle errors in asynchronous code.

:balloon: Better performance: Async/await can improve the performance of asynchronous code by reducing the number of context switches that occur.



# 4.How can you use TypeScript's enums, and what are their advantages?

👍 TypeScript enums are a way to define a set of named constants. They can be used to make your code more readable and maintainable, and to prevent errors.



👍 Advantages of using TypeScript enums

:balloon: Readability: Enums make your code more readable by giving meaningful names to sets of numeric or string values.

:balloon: Maintainability: Enums make your code more maintainable by centralizing the definition of constants in one place.

:balloon: Error prevention: Enums help to prevent errors by restricting the values that can be assigned to variables and used in expressions.

# 5.Explain the role of type guards in TypeScript and provide an example of a custom type guard.


👍 Type guards in TypeScript are a way to refine the type of a variable or expression at runtime. This can be useful for preventing errors and making your code more robust.

👍 How type guards work

:balloon: Type guards work by checking the value of a variable or expression at runtime and returning a boolean value. If the value matches the type of the type guard, then the type of the variable or expression is narrowed to that type.

👍 Example of a custom type guard

function isString(value: unknown): boolean {
  return typeof value === 'string';
}


# 6. Can you give an example of how to use "readonly" properties in TypeScript?

👍 Readonly properties in TypeScript are properties that cannot be reassigned after they are initialized. This can be useful for preventing errors and making your code more robust.

👍 Example : 
class Person {
  readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
}


# 7. Explain what a union type is in TypeScript and provide an example of its usage.


👍 A union type in TypeScript is a type that can be one of several other types. It is declared using the pipe operator ( | ), which separates the different types in the union. For example, the type string | number is a union type that can be either a string or a number.

👍 Union types are useful for representing values that can be of different types, such as the result of a function that can return either a string or a number, or a variable that can be assigned either a string or a number.

👍 Example : 
// A type that can be either a string or a number
type StringOrNumber = string | number;

// A type that can be either a boolean or a null
type BooleanOrNull = boolean | null;

