"use strict"
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];



let userLanguage=users.filter(function (totalLanguage,language){
    return totalLanguage.languages.length>=3
})


// let userLanguage=users.filter((totalLanguage,language)=>totalLanguage.languages.length>=3)



let emailAddress=users.map(function (n){
    return n.email
})

// let emailAddress=users.map(n=>n.email)


// let totalExperience=users.reduce(function (experienceYears,user){
//      experienceYears+=user.yearsOfExperience
//     return experienceYears
// },0)
// let average =totalExperience/users.length



// let longestEmail=emailAddress.reduce(function (current,user){
//     if (user.length >current.length){
//         current=user
//     }
//     return current
// },'')

// let listUserNames=users.reduce(function (listNames,userName){
// return ` ${listNames} ${userName.name},`
// },'Your instructors are').slice(0,-2).concat('.')


// //BONUS
var unik=users.reduce(function (uniqueLangs,user){
    if (uniqueLangs ==[]){
        uniqueLangs=user.languages
    }else{
        uniqueLangs +=user.languages
    }

    return uniqueLangs
},[])
console.log(unik);
// const uniqueLangs= new Set(unik);
// // const arrUnique=Array.from(uniqueLangs);
// console.log(uniqueLangs);
