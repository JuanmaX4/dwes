function dateCompare(date1, date2) {

   if (date1 < date2) 
        return {startDate: date1.toISOString(), endDate: date2.toISOString()};
   else(date1 > date2) 
        return {startDate: date2.toISOString(), endDate: date1.toISOString()};
        
}

module.exports = dateCompare;
