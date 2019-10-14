## Event Tracker Project

Week 12 Homework Project for Skill Distillery

This is an individual full stack web application project that displays CRUD
functionality with Javascript frontend.

### Overview

This program is a Wine Tracker that allows users to create, read, update, and
delete wine and winery information in order to track their favorite Colorado Wines.
Users can see a list of all wines and wineries, view details of a specific wine,
and add, update, or delete a wine.

### Technologies Used

-   Java / JPARepository
-   Javascript
-   JUnit
-   MySQL / MySQL Workbench
-   Spring Boot / Spring Rest
-   Gradle
-   Git / Github
-   Terminal
-   AWS / EC2

### Access

<http://18.224.122.182:8080/WineTracker/>

<!-- From the homepage, users can access the search features and add a wine to the
database. From the list of all wines, each row can be clicked to see the individual
wine information or sort the list by rating. Once the user is on the individual
wine page they can update or delete the wine using the pre-populated text input
boxes. -->

From the homepage, users can access the list of wines or list of wineries by
clicking on the appropriate link in the navbar menu. While in the wine list,
users can add a new wine, view details of a specific wine, and see the count
of total wines in their list. From the wine detail page, users can update the
details of the wine or delete the wine from their list.

At this point, the winery list only allows users to add a winery and view the
list of wineries, from which they can click the link to view the winery website.

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

I learned that the file structure in angular is very similar to the Java file
structure. Angular models, components, and services, are reminiscent of entities,
services, and controllers, so it was easier to navigate than anticipated.

I enjoy working on frontend design. It is rewarding to see all the work that was
put into writing the code, get a usable interface.

I like the addEventListener functionality of Javascript. Having the ability to
make any item on the page clickable really improves the usability of the site. It
is a big improvement over creating multiple .jsp pages to navigate from view to
view.

Testing is important. I am finally feeling somewhat comfortable using JUnit to
test my entities and repositories. Testing these before moving on deeper into
the code is important in preventing issues as the project becomes more complex.

### Improvements Needed

I would like to include more functionality on the wineries. It would be nice to
have a map of the location and perhaps add a rating system for the wineries as
well. I would like to add the user login functionality in the future.

Basic CRUD functionality is working, more findBy functionality needs built in
in order for users to search by different fields. This will allow the project
to be more user friendly and have real world functionality. I would like to
incorporate searching for a list of wines by winery name.
