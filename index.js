// Code your solution here
function findMatching(drivers, search){
    return drivers.filter(
        (possibleMatch) => possibleMatch.toLowerCase() === search.toLowerCase()
    )
}

function fuzzyMatch(names, queary){
    return names.filter(
        (possibleMatch) => possibleMatch.toLowerCase().indexOf(queary.toLowerCase()) === 0
    )
}

function matchName(name, hometown){
    return name.filter(
        (possibleMatch) => possibleMatch.name === hometown
    )
}