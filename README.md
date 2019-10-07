## Event Tracker Project

Week 12 Homework Project for Skill Distillery

This is an individual full stack web application project that displays CRUD
functionality with Javascript frontend.

### Overview

This program is a Wine Tracker that allows users to create, read, update, and
delete wine and winery information in order to track their wine preferences. users
can see a list of all wines, sort them by rating, find a specific wine by Id number, and add, update, or delete a wine.

### Technologies Used

 Java / JPARepository
 Javascript
 JUnit
 MySQL
 MySQL Workbench
 Spring Boot
 Spring Rest
 Gradle
 Github
 Terminal
 AWS

### Access

<http://18.224.122.182:8080/WineTracker/>

From the homepage, users can access the search features and add a wine to the
database. From the list of all wines, each row can be clicked to see the individual
wine information or sort the list by rating. Once the user is on the individual wine page they can update or delete the wine using the pre-populated text input
boxes.

<!-- <http://18.224.122.182:8080/WineTracker/api/wines>

| Return Type |           Route          |                   Functionality |
| ----------- | :----------------------: | ------------------------------: |
| List        |       GET api/wines      |          Gets list of all Wines |
| Wine        |    GET api/wines/{id}    | Gets a single wine object by id |
| Wine        |      POST api/wines      |       Creates a new wine object |
| Wine        |    PUT api/wines/{id}    |           Updates a wine object |
| boolean     |   DELETE api/wines/{id}  |           Deletes a wine object |
| List        |       GET api/wines      |       Gets list of all Wineries |
| Winery      |   GET api/wineries/{id}  | Gets a single wine object by id |
| Winery      |     POST api/wineries    |      Creates a new winer object |
| Winery      |   PUT api/wineries/{id}  |           Updates a wine object |
| boolean     | DELETE api/wineries/{id} |         Deletes a winery object | -->

### Lessons learned

I like the addEventListener functionality of Javascript. Having the ability to
make any item on the page clickable really improves the usability of the site. It
is a big improvement over creating multiple .jsp pages to navigate from view to
view.

Testing is important. I am finally feeling somewhat comfortable using JUnit to
test my entities and repositories. Testing these before moving on deeper into
the code is important in preventing issues as the project becomes more complex.

### Improvements Needed

Basic CRUD functionality is working, more findBy functionality needs built in
in order for users to search by different fields. This will allow the project
to be more user friendly and have real world functionality. I would like to
incorporate searching for a list of wines by winery name.

The site needs a visually appealing frontend. As it stands right now, it could
be a little confusing from a user experience point of view.
