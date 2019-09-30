## Event Tracker Project

Week 12 Homework Project for Skill Distillery

This is an individual full stack web application project that displays CRUD
functionality.

### Overview

This program is a Wine Tracker that allows users to create, read, update, and
delete wine and winery information in order to track their wine preferences.

### Technologies Used

 Java / JPARepository
 JUnit
 MySQL
 MySQL Workbench
 Spring Boot
 Spring Rest
 Gradle
 Github
 Terminal

### Mappings

| Return Type |         Route         |                   Functionality |
| ----------- | :-------------------: | ------------------------------: |
| List        |     GET api/wines     |          Gets list of all Wines |
| Wine        |   GET api/wines/{id}  | Gets a single wine object by id |
| Wine        |     POST api/wines    |       Creates a new wine object |
| Wine        |   PUT api/wines/{id}  |           Updates a wine object |
| List        |     GET api/wines     |       Gets list of all Wineries |
| Winery      | GET api/wineries/{id} | Gets a single wine object by id |
| Winery      |   POST api/wineries   |     Creates a new winery object |
| Winery      | PUT api/wineries/{id} |         Updates a winery object |

### Lessons learned

Testing is important. I am finally feeling somewhat comfortable using JUnit to
test my entities and repositories. Testing these before moving on deeper into
the code is important in preventing issues as the project becomes more complex.

### Improvements Needed

Basic CRUD functionality is working, more findBy functionality needs built in
in order for users to search by different fields. This will allow the project
to be more user friendly and have real world functionality.
