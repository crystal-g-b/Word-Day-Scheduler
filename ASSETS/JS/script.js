//button
    //gete a ref to all of thr save buttons $('.saveBtn)
    //in activity 1 and 2
    //add a click handler to each save button using .on() method- ref actvity 3 and 4
    //traverse DOM to get values we need to storage in localstorage; need to access .parent() .sibling() - ref act 8
    //set items in local storage -ref unit 4

//handle color coding
    //use the moment library to get the current hour 
    //get a reference to all time blocks
    //loop through time blocks- ref unit 3
    //get the data hour value timeblocks[i].data('hour')
    //we need an if else statement- condition we compare the current hour with the timeblock " <, ===, >"- ref unit 3
    //adding or removing  (or both) classes

//get the data from localstorage and populate the timeblocks
    //getItem
    //reference to the textarea (id)
    //.val()
    //approach -. use jquery $('textarea'); -> loop -> 
    // -> get a ref to id of .parent()
    //.val() = localStorage.getItem(pass in the parent id)

//current day -> top of calendar
    //use moment library - .format()

//call the color coding function
//setInterval -> 15000(every 15secs)