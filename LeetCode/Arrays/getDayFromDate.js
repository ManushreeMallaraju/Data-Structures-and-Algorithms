

function findDay(myDate) {
    // Return day for date myDate(MM/DD/YYYY)
    // Note that myDate contains the date in string format
     const days = ["Sunday","Monday","Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
    
    const formatedDate = new Date(myDate);
    
    const day = formatedDate.getDay();
    console.log(days[day]);
    
 
}
