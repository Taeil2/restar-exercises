getReferrers = function (user_list) {
  user_list = JSON.parse(JSON.stringify(user_list))

  for (i = 0; i < user_list.length; i++) {
    user_list.find(function (x) {
      if (x.id == user_list[i]["referrerId"]) {
        user_list[i].referrer = x.name
      }
    })
    if (!user_list[i].hasOwnProperty('referrer')) {
      user_list[i].referrer = null
    }
  }
  console.log(user_list)
  return user_list
  // return user_list2
}


let users = [
  { id: 1, referrerId: 2, name: "Joe" },
  { id: 2, referrerId: null, name: "Jane" },
  // ... big array of users
]

getReferrers(users);


// getReferrers = function (user_list) {
//   user_list = JSON.parse(JSON.stringify(user_list))
//   user_list2 = [];
//   for (i = 0; i < user_list.length; i++) {
//     user_list[i].referrer = user_list.find(function (x) {
//       if (x.id == user_list[i]["referrerId"]) {
//         return true;
//       }
//     })
//     user_list[i].referrer = user_list[i].referrer && user_list[i].referrer.name || null;
//     user_list2.push(user_list[i])
//   }
//   return user_list2
// }