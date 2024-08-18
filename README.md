Pokémon Battler JS

Overview

Welcome to Pokémon Battler JS! This project simulates Pokémon battles using JavaScript, focusing on Object-Oriented Programming (OOP) principles and Test-Driven Development (TDD) using Jest. It was developed

The project includes a set of Pokémon classes, a Trainer class, and a Battle system, allowing you to simulate Pokémon catching and battles between Trainers. The project is designed to be extendable and easy to test, making it a great example of combining OOP with TDD practices.

Pair Programming

This project was developed using Pair Programming, a collaborative approach where two developers work together at a single workstation. One developer, known as the "Driver," writes the code, while the other, known as the "Navigator," reviews each line of code as it is written, offering suggestions and discussing the overall direction of the work.

Throughout this project, my classmate and I alternated between the roles of Driver and Navigator, ensuring that both of us were equally involved in the planning, coding, and testing phases. This method allowed us to combine our strengths, catch errors early, and produce a more robust and well-thought-out application.

Features

Object-Oriented Design: The project is built around key OOP principles such as encapsulation, inheritance, and polymorphism.

Test-Driven Development: All core features are developed using TDD, with a comprehensive set of Jest tests to ensure the correctness and reliability of the code.

Extensible Pokémon Types: The code is designed to easily add new Pokémon types and moves.

Battle Simulation: Simulate battles between Pokémon with type advantages and weaknesses.

Project Structure

pokemon.js: Contains the main classes for Pokémon, Trainer, Pokéballs, and the Battle system.

__tests__/pokemon.test.js: Contains Jest tests covering all aspects of the functionality, including Pokémon creation, battles, and catching mechanics

Key Concepts

Object-Oriented Programming (OOP)

The project heavily relies on OOP principles:

Encapsulation: Each Pokémon type (e.g., Fire, Water) is represented as a class, encapsulating properties like name, hitPoints, attackDamage, and methods like useMove() and takeDamage().

Inheritance: Pokémon types (e.g., Fire, Water) inherit from a base Pokemon class, allowing shared behavior while enabling specific overrides (e.g., isEffectiveAgainst()).

Polymorphism: Methods like isEffectiveAgainst() and isWeakAgainst() demonstrate polymorphism by behaving differently based on the type of Pokémon passed.

Test-Driven Development (TDD) with Jest

The project uses Jest for testing, ensuring that each feature works as expected before it’s implemented in the actual codebase. Key practices include:

Write a test before implementing a feature: Each method and class was developed by first writing a failing test, then implementing the functionality to make the test pass.

Test coverage: The tests cover a wide range of scenarios, including normal operation, edge cases, and error conditions.

Automated testing: Running npm test executes all tests, providing immediate feedback on the correctness of the code.

Pokémon Battle System

The battle system considers Pokémon type advantages:

Fire is strong against Grass but weak against Water.

Water is strong against Fire but weak against Grass.

Grass is strong against Water but weak against Fire.

These type advantages are built into the typeChecker() method within the Battle class, affecting the damage calculation during battles.

Future Plans

I plan to extend this project into a fully functional mini-game using Inquirer.js for an interactive command-line interface. The goal is to allow players to engage in Pokémon battles directly in the terminal, making choices for their Pokémon and strategizing against their opponents. 
