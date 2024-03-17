function dateMethods() {
    const currentDate = new Date();
    console.log("Current Date:", currentDate);

    // Getting various components of the date
    console.log("Date:", currentDate.getDate());
    console.log("Month:", currentDate.getMonth() + 1);
    console.log("Year:", currentDate.getFullYear());
    console.log("Hours:", currentDate.getHours());
    console.log("Minutes:", currentDate.getMinutes());
    console.log("Seconds:", currentDate.getSeconds());

    // Getting and setting time in millisecs since 1970
    console.log("Time is milliseconds since 1970:", currentDate.getTime());

    // setting components of the date
    currentDate.setFullYear(2023);
    console.log("After setFullYear, updated year is:", currentDate.getFullYear());
    currentDate.setMonth(5);
    console.log("After setMonth, updated month is:", currentDate.getMonth());
    // updated time
    console.log("After updating month and year, current date is:", currentDate);

   // Creating a new date
   const newDate = new Date(2023, 9, 10);
   console.log("After setting the date, new date:", newDate)
}

dateMethods();

