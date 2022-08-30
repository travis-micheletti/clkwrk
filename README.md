# clkwrk - backend
## Description:
-	This is the backend server for the front-facing app clkwrk. Though not all models and controller routes are fully utilized at this time, there are plans for continuous expansion and further integration of features moving forward
-	As of now, the primary functions for the back end are for retrieving all employees, retrieving one employee for the profile view, creating a new employee and creating a note for a specific employee
-	In the future, all employee notes will be logged to the employeeLog array listed in the employee model (unless I decide to change the layout of the data) as well as export all data via excel by using get requests that are customized based on front-end manipulation
## Tech Used:
-	Express
-	MongoDB
-	Mongoose
-	Node
## Install Instructions:
- If you'd like to contribute:
	- 	Fork/Clone
	- 	install dependencies
	- 	create .env file and set DATABASE_URL='your database url'
	- 	In terminal run 'node(or nodemon) db/seeds.json'
		-	This will seed your database with the included seed files for testing
- If you have a change you'd like to recommend making please create a pull request. I'll do my best to respond to all requests ASAP

