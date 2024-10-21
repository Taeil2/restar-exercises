function orderByName(users) {
  const sortedNames = [];
  const capitalizations = {}
  /*
  capitalizations produces an object that looks like this:

  {
    charles: "Charles",
    alice: "Alice",
    bob: "bob",
  }

  The purpose is to return the original capitalizations after an array of lowercase names has been sorted.
  */

  // create the sortedNames array and capitaliztions dictionary
  users.forEach((user) => {
    sortedNames.push(user.name.toLowerCase());
    capitalizations[user.name.toLowerCase()] = user.name;
  });

  // sort the lower case names. (sort only works on lower case names, because the 'C' character code comes before 'b')
  sortedNames.sort();

  // reinsert the {name: ""} object, recapitalize the lower case name.
  return sortedNames.map((sortedName) => {
    return { name: capitalizations[sortedName] }
  })

  /*
    to consider:
    this solution currently does not account for duplicate names when converted to lower case like "bob", "Bob", and "BoB".
    if duplicates happen, the capitalizations dictionary could be modified to work more like this:
    {
      bob: "bob",
      bob2: "Bob",
      bob3: "BoB",
    }
  */
}

orderByName([{name: "Charles"}, {name: "Alice"}, {name: "bob"}]);