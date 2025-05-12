// sales calculator 2.0



//time table

// Sales Calculator 2.0

// Time multipliers
const multipliers = {
    weekly: 1,
    biweekly: 1.05, // Fixed
    triweekly: 1.1,
    monthly: 1.15,
    initial: 1.5,
    oneTime: 1.60,
    moveOut: 2.00
};

// Add event listener to button
document.getElementById('btn').addEventListener('click', function () {
    const squareFeet = parseFloat(document.getElementById('sqft').value) || 0;
    const bathRooms = parseFloat(document.getElementById('bath').value) || 0;
    const workers = parseFloat(document.getElementById('workers').value) || 0;
    const price = parseFloat(document.getElementById('price').value) || 0;

    let timeFormula = 0;
    const bathTime = 10;

    // Calculate weekly estimated time
    if (squareFeet <= 999) {
    // *mulitplying the fomrula by 2 gives the time for one lady
     timeFormula = (((squareFeet / 22) + (bathRooms * bathTime)) * 2) / workers
    }

    else if (squareFeet >= 1000 && squareFeet <= 1999) {
        timeFormula = (((squareFeet / 22) + (bathRooms * bathTime)) * 2) / workers
        }
 
     else if (squareFeet >= 2000 && squareFeet <= 2999) {
        timeFormula = (((squareFeet / 22) + (bathRooms * bathTime)) * 2) / workers
            }

        else if (squareFeet >= 3000 && squareFeet <= 3999) {
            timeFormula = (((squareFeet / 22) + (bathRooms * bathTime)) * 2) / workers
            }

        else if (squareFeet >= 4000 && squareFeet <= 4999) {
                timeFormula = (((squareFeet / 22) + (bathRooms * bathTime)) * 2) / workers
            }

        else  {
                timeFormula = (((squareFeet / 22) + (bathRooms * bathTime)) * 2) / workers
            }

            
        
            timeFormula = timeFormula / 60; // Convert minutes to hours (decimal)


    // Ensure `weeklytime` is an input or use `.innerText` if it's a span/div
    const weeklyTimeElement = document.getElementById('weeklytime');
    if (weeklyTimeElement.tagName === 'INPUT') {
        weeklyTimeElement.value = timeFormula.toFixed(2);
    } else {
        weeklyTimeElement.innerText = timeFormula.toFixed(2);
    

        
    
    }

   

    // Set calculated times for different cleaning schedules
    document.getElementById("biweeklytime").innerText = (timeFormula * multipliers.biweekly).toFixed(2);
    document.getElementById("triweeklytime").innerText = (timeFormula * multipliers.triweekly).toFixed(2);
    document.getElementById("monthlytime").innerText = (timeFormula * multipliers.monthly).toFixed(2);
    document.getElementById("initialtime").innerText = (timeFormula * multipliers.initial).toFixed(2);
    document.getElementById("one-timetime").innerText = (timeFormula * multipliers.oneTime).toFixed(2);
    document.getElementById("move-outtime").innerText = (timeFormula * multipliers.moveOut).toFixed(2);


    // *team lead pay (multiply time by $18)
    document.getElementById("teamleadpayweekly").innerText = `$${(timeFormula * 18).toFixed(2)}`;
    document.getElementById("teamleadpaybiweekly").innerText = `$${(((timeFormula * multipliers.biweekly)) * 18).toFixed(2)}`;
    document.getElementById("teamleadpaytriweekly").innerText = `$${(((timeFormula * multipliers.triweekly)) * 18).toFixed(2)}`;
    document.getElementById("teamleadpaymonthly").innerText = `$${(((timeFormula * multipliers.monthly)) * 18).toFixed(2)}`;
    document.getElementById("teamleadpayinitial").innerText = `$${(((timeFormula * multipliers.initial)) * 18).toFixed(2)}`;
    document.getElementById("teamleadpayone-time").innerText = `$${(((timeFormula * multipliers.oneTime)) * 18).toFixed(2)}`;
    document.getElementById("teamleadpaymove-out").innerText = `$${(((timeFormula * multipliers.moveOut)) * 18).toFixed(2)}`;

    //assistant pay (muliply time by $14)
    document.getElementById("assistantpayweekly").innerText = `$${(timeFormula * 14).toFixed(2)}`;
    document.getElementById("assistantpaybiweekly").innerText = `$${(((timeFormula * multipliers.biweekly)) * 14).toFixed(2)}`;
    document.getElementById("assistantpaytriweekly").innerText = `$${(((timeFormula * multipliers.triweekly)) * 14).toFixed(2)}`;
    document.getElementById("assistantpaymonthly").innerText = `$${(((timeFormula * multipliers.monthly)) * 14).toFixed(2)}`;
    document.getElementById("assistantpayinitial").innerText = `$${(((timeFormula * multipliers.initial)) * 14).toFixed(2)}`;
    document.getElementById("assistantpayone-time").innerText = `$${(((timeFormula * multipliers.oneTime)) * 14).toFixed(2)}`;
    document.getElementById("assistantpaymove-out").innerText = `$${(((timeFormula * multipliers.moveOut)) * 14).toFixed(2)}`;

    //total pay (Team Lead Pay + ((workers - 1) * $14)
   // Weekly
const teamLeadPayWeekly = (timeFormula * 18);
const assistantPayWeekly = ((workers - 1) * timeFormula * 14);
document.getElementById("totalpayweekly").innerText = `$${(teamLeadPayWeekly + assistantPayWeekly).toFixed(2)}`;

// Biweekly
const teamLeadPayBiweekly = (timeFormula * multipliers.biweekly * 18);
const assistantPayBiweekly = ((workers - 1) * timeFormula * multipliers.biweekly * 14);
document.getElementById("totalpaybiweekly").innerText = `$${(teamLeadPayBiweekly + assistantPayBiweekly).toFixed(2)}`;

// Triweekly
const teamLeadPayTriweekly = (timeFormula * multipliers.triweekly * 18);
const assistantPayTriweekly = ((workers - 1) * timeFormula * multipliers.triweekly * 14);
document.getElementById("totalpaytriweekly").innerText = `$${(teamLeadPayTriweekly + assistantPayTriweekly).toFixed(2)}`;

// Monthly
const teamLeadPayMonthly = (timeFormula * multipliers.monthly * 18);
const assistantPayMonthly = ((workers - 1) * timeFormula * multipliers.monthly * 14);
document.getElementById("totalpaymonthly").innerText = `$${(teamLeadPayMonthly + assistantPayMonthly).toFixed(2)}`;

// Initial
const teamLeadPayInitial = (timeFormula * multipliers.initial * 18);
const assistantPayInitial = ((workers - 1) * timeFormula * multipliers.initial * 14);
document.getElementById("totalpayinitial").innerText = `$${(teamLeadPayInitial + assistantPayInitial).toFixed(2)}`;

// One-Time
const teamLeadPayOneTime = (timeFormula * multipliers.oneTime * 18);
const assistantPayOneTime = ((workers - 1) * timeFormula * multipliers.oneTime * 14);
document.getElementById("totalpayone-time").innerText = `$${(teamLeadPayOneTime + assistantPayOneTime).toFixed(2)}`;
 
// Move-Out
const teamLeadPayMoveOut = (timeFormula * multipliers.moveOut * 18);
const assistantPayMoveOut = ((workers - 1) * timeFormula * multipliers.moveOut * 14);
document.getElementById("totalpaymove-out").innerText = `$${(teamLeadPayMoveOut + assistantPayMoveOut).toFixed(2)}`;





//converted to hours + minutes)
   // Weekly
   function convertToHoursMinutes(decimalTime) {
    const hours = Math.floor(decimalTime);
    const minutes = Math.round((decimalTime - hours) * 60);
    return `${hours}h ${minutes}m`;
}

document.getElementById("convertedweeklytime").innerText = convertToHoursMinutes(timeFormula);

document.getElementById("convertedbiweeklytime").innerText = convertToHoursMinutes(timeFormula * multipliers.biweekly);

document.getElementById("convertedtriweeklytime").innerText = convertToHoursMinutes(timeFormula * multipliers.triweekly);

document.getElementById("convertedmonthlytime").innerText = convertToHoursMinutes(timeFormula * multipliers.monthly);

document.getElementById("convertedinitialtime").innerText = convertToHoursMinutes(timeFormula * multipliers.initial);

document.getElementById("convertedone-timetime").innerText = convertToHoursMinutes(timeFormula * multipliers.oneTime);

document.getElementById("convertedmove-outtime").innerText = convertToHoursMinutes(timeFormula * multipliers.moveOut);





// Profit calculation (price - total labor cost)
document.getElementById("profitweekly").innerText = `$${(price - (teamLeadPayWeekly + assistantPayWeekly)).toFixed(2)}`;
document.getElementById("profitbiweekly").innerText = `$${(price - (teamLeadPayBiweekly + assistantPayBiweekly)).toFixed(2)}`;
document.getElementById("profittriweekly").innerText = `$${(price - (teamLeadPayTriweekly + assistantPayTriweekly)).toFixed(2)}`;
document.getElementById("profitmonthly").innerText = `$${(price - (teamLeadPayMonthly + assistantPayMonthly)).toFixed(2)}`;
document.getElementById("profitinitial").innerText = `$${(price - (teamLeadPayInitial + assistantPayInitial)).toFixed(2)}`;
document.getElementById("profitone-time").innerText = `$${(price - (teamLeadPayOneTime + assistantPayOneTime)).toFixed(2)}`;
document.getElementById("profitmove-out").innerText = `$${(price - (teamLeadPayMoveOut + assistantPayMoveOut)).toFixed(2)}`;



//profit margin 

document.getElementById("profitMarginweekly").innerText = `${(((price - (teamLeadPayWeekly + assistantPayWeekly)) / price) * 100).toFixed(2)}%`;
document.getElementById("profitMarginbiweekly").innerText = `${(((price - (teamLeadPayBiweekly + assistantPayBiweekly)) / price) * 100).toFixed(2)}%`;
document.getElementById("profitMargintriweekly").innerText = `${(((price - (teamLeadPayTriweekly + assistantPayTriweekly)) / price) * 100).toFixed(2)}%`;
document.getElementById("profitMarginmonthly").innerText = `${(((price - (teamLeadPayMonthly + assistantPayMonthly)) / price) * 100).toFixed(2)}%`;
document.getElementById("profitMargininitial").innerText = `${(((price - (teamLeadPayInitial + assistantPayInitial)) / price) * 100).toFixed(2)}%`;
document.getElementById("profitMarginone-time").innerText = `${(((price - (teamLeadPayOneTime + assistantPayOneTime)) / price) * 100).toFixed(2)}%`;
document.getElementById("profitMarginmove-out").innerText = `${(((price - (teamLeadPayMoveOut + assistantPayMoveOut)) / price) * 100).toFixed(2)}%`;










});

// Enter key event listener (NEW)
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Optional: prevents form submit
        document.getElementById('btn').click(); // Triggers your original click handler
    }
});