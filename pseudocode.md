- Landing Page
    - shows logo
    - logo transiitions in and then off screen
    - basic function that after a delay will navigate to the login screen

- Login Screen
    - allows users to login or create account
    - after login/account creation navigates to home page

- Home Page
    - top left of screen has app logo inset to the nav bar
    - Nav Bar:
        - nav bar is a seperate component and will at first live completely on the top bar
        - may eventually change to have in the middle of app on home page
        - allows navigation to:
            - a view of all employees
            - a view of a certain department
                - department tab has additional dropdown
            - a view of a certain shift
                - shift tab has additional dropdown
            - current employees working
            - out/missing employees
            - location map
    - Without central navigation on home screen include a graphic/possibly a calendar with an inspirational/funny/interesting quote/fact
    - bottom right shows:
        - 'Logged in as {User.lastname, User.firstname}'

- All Employees Screen
    - Navigation is now in the top right
    - Title of Employees screen : "All Employees"
    - Shows all departments with a list of some/all currently working employees
        - List has drop down with "More" to drop down a modal to display all employees in that department
    - Has a filter by dropdown in top right that will filter based on department, labor code, shift, etc
    - option to export data to excel

- Department Screen
    - Same nav spot
    - Title of {Department Selected} Department
    - List of all employees within that department
        - Shows active/clocked in employees/most recent shift started first, then last (still working) shift, and at the bottom the clocked out shift
    - Clicking on any of these employees will populate the employee profile page
    - option to export data to excel

- Shift Screen
    - Same nav spot
    - Title of {Shift Selected} Shift
    - List of all employees within that shift
        - Shows all employees working within a certain shift broken up by department
    - Clicking on any of these employees will populate the employee profile page
    - option to export data to excel

- Current Screen
    - Same nav spot
    - Title of Clocked-in Employees
    - List of all employees currently clocked in
        - Displays by department
    - Clicking on any of these employees will populate the employee profile page

- Sick/Missing/Out
    - Same nav/logo spot
    - Title of Sick/Missing/out
    - Lists all employees who were scheduled to work today but out
    - This list is manually filled out by the timekeeper
    - Has direct links to each employee's attendance and employee logs
    - option to export data to excel

- Single Employee Profile
    - same nav and logo
    - left hand side shows the employee's picture with their name directly below it
    - the div next to it will have it's own tab nav bar at the top
        - tabs will include:
            - bio:
                - shift
                - department
                - labor code
                - room
                    - These are all clickable to navigate to associated fields
            - interview notes
                - {Employee.interviewNotes}
            - attendance log
                - {Employee.attendanceLog}
            - employee log
                - {Employee.employeeLog}
            - bunkhouse log
                - {Employee.bunkhouseLog}
    - Buttons at the bottom for:
        - making a note
            - select which type of note
            - type of note determines which array of information is updated for user
                - use unshift() to add the newest entry to the array
        - write up
            - automatically logs to the employee log as well as adds to a separate "write-up" array?
        - change labor code
            - ability to change labor code or department
                - get rid of labor code entirely for now??

- Attendance/Employee logs:
    - accessible from the employee profile page
    - will default to a written format with logs
        - ie: [23-Aug-2022] - {Employee.firstName} was 23 minutes late to {Employee.shift} in the {Employee.department} department
        or
        - ie: [23-Aug-2022] - {Employee.firstName} was transferred from the {Employee.department} department to {new(Employee.department)} department
    - option to export data to excel
    
