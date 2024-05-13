let guestArr:string[] = ["Munazzah","Alishba","Nasir","Tehmina"];

let cannotAttend: string= "Nasir";
console.log(cannotAttend)
let newguest: string = "Alvina" ;

guestArr[guestArr.indexOf(cannotAttend)] = newguest
console.log (guestArr)

// guestArr.map ((items) => console.log (`Dear ${items},I found new bigger dinning table so I m inviting more guest happily.`))

// part 2
let guestBeg :string = "Yusha" ;
guestArr.unshift(guestBeg)
console.log(guestArr)
// part 3 (ask teacher why it is removing guest name v just hv to add guest
let middleGuest: string = "Fatima";
let middleIndex = guestArr.length/3
guestArr.splice(middleIndex,0,middleGuest)
console.log(guestArr)
// part 4 append
guestArr.push("Zeeshan")
console.log(guestArr)
// part 5 
guestArr.map ((items) => console.log (`Dear ${items}, You people are invited for the dinner according to our updated list.`))