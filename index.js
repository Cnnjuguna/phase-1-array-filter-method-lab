// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']



//TAkes array of driver's names & a string and returns the matching list 
function findMatching(drivers, item){
    return drivers.filter(function(driverName)
    {return driverName.toLowerCase() === item.toLowerCase()})

}



// .....fuzzyMatch
function fuzzyMatch(drivers, nameGuess){
    return drivers.filter(function(driverName)
    {return driverName.toUpperCase().substring(0, nameGuess.length) === nameGuess.toUpperCase()})
    
    
}


function matchName(drivers, item){
    return drivers.filter(function(drivers){
        return drivers.name === item
    })
}






