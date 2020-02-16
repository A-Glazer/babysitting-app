1. Homepage (Welcome)
    a. View babysitters
    b. Add a new babysitter

2. Add new Babysitter Form
    a. First Name
    b. Last Name
    c. Phone Number
    d. Days of the Week Availability (checkbox Sun, Mon, Tues, Wed, Thurs, Fri, Sat.)
    e. Time Availability (checkbox: Morning, afternoon, evening)
    f. Zipcode

3. View Babysitters
    a. Card for each babysitter (alphabetical by last name)
    b. Filter 
        i. Filter by date
        ii. Filter by time
    c. Delete Babysitter
    d. Add a Comment
    <!-- e. Recommended (thumbs up) ?? -->


4. Add a comment form (rendered on babysitter view page)
    a. Message box
    b. Submit



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