<!-- 1. Login Screen
    a. Login 
    b. Signup

2. Login Form
    a. email
    b. password

3. Sign Up form
    a. Name
    b. email
    c. password
    d. confirm password -->

4. Homepage (Welcome)
    a. View all babysitters
    b. Add a new babysitter
    <!-- c. View my babysitters (babysitters you used before) -->

5. Add new Babysitter Form
    a. First Name
    b. Last Name
    c. Phone Number
    d. Days of the Week Availability (checkbox Sun, Mon, Tues, Wed, Thurs, Fri, Sat.)
    e. Time Availability (checkbox: Morning, afternoon, evening)


6. View all Babysitters
    a. Card for each babysitter (alphabetical by last name)
    b. Filter 
        i. Filter by date
        ii. Filter by time
    c. Delete Babysitter
    d. Add a Comment
   
    <!-- e. Recommended (thumbs up) ?? -->
<!-- 7. View my babysitters
    a. Cards of babysitters that have checkbox that used -->


8. Add a comment form (rendered on babysitter view page)
    a. Message box
    b. Submit

9. Navbar
    a. Home
    b. View Babysitters
    c. Logout
    


Notes:
src/components:
    1. babysitters
        a. 
    2. comments

src/containers:
    1. BabysittersContainer

    2. CommentsContainer

src/reducers
    1. manageBabysitters
        LOADING_BABYSITTERS
        ADD_BABYSITTER
        DELETE_BABYSITTER
        ADD_COMMENT
        DELETE_COMMENT


src/actions
    1. babysitterAction
        a. LOADING_BABYSITTERS (loading sign)
        b. fetch(babysitter list)



drop down menu for time_of_day (23 min expense tracker part 9)


to do:
- remove duplicate time_of_day
- only show slot card if time_of_day 
- sort time_of_day (morn, aft, eve)
- add edit babysitter

(- work on comments)


bootstrap
Cards - for each babysitter
Dropdowns - for date and time
Forms - all the forms (check out form grid)
Modal - for a delete pop up asking you if you want to delete
Navbar
buttons/overlays
spinners - while loading a fetch

