var rowEl = $('#time-block');
var timeEl = $('#hour');
//get a ref to all of the save buttons $('.saveBtn)
var saveEl = $('.saveBtn');
var toDoEl =$('.description');

//current day -> top of calendar
    //use moment library - .format()
    var today = moment();
    $("#currentDay").text(today.format("MMMM Do, YYYY HH:mm:ss a"));

 //add a click handler to each save button using .on() method- ref actvity 3 and 4
    saveEl.on('click', function() {
 //traverse DOM to get values we need to storage in localstorage; need to access .parent() .sibling() - ref act 8
        var toDoEl = $(this).siblings('.description').val();
        var timeEl =$(this).parent().attr('id');
//set items in local storage -ref unit 4
       localStorage.setItem(timeEl, toDoEl);     
    });
    

//handle color coding
//use the moment library to get the current hour 
    function colorCode() {
        var currentHour = moment().hours();
//get a reference to all time blocks
 //loop through time blocks- ref unit 3
        $('.time-block').each(function() {
            var timeSlot = parseInt($(this).attr('.id').split('hour')[1]);
//we need an if else statement- condition we compare the current hour with the timeblock " <, ===, >"- ref unit 3
//adding or removing  (or both) classes
            if (timeSlot < currentHour) {
                $(this).addClass("past");
            }
            else if (timeSlot === currentHour) {
                $(this).removeClass('past');
                $(this).addClass("present");
            }
            else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            }
        });
      
    }


    
   
    //get the data hour value timeblocks[i].data('hour')
    

//get the data from localstorage and populate the timeblocks
    //getItem
    //reference to the textarea (id)
    //.val()
    //approach -. use jquery $('textarea'); -> loop -> 
    // -> get a ref to id of .parent()
    //.val() = localStorage.getItem(pass in the parent id)



//call the color coding function
    colorCode();

//setInterval -> 15000(every 15secs)

saveEl.addEventListener("click", submitTasks);

