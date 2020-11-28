"use strict";


function wait(numMilliseconds) {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve();
       }, numMilliseconds)
    });
}

// ALTERNATE SOLUTION

// function wait(numMilliseconds) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, numMilliseconds)
//     });
// }





wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


function extractDateOfLastPushEvent(events) {
    for (let event of events) {
        if (event.type === 'PushEvent') {
            return new Date(event.created.at).toDateString();
        }
    }
    return null;
}

function lastPushDate(username) {
    const url = 'https://api.github.com/users/${username}/events';
    const options = {headers: {'Authorization': 'token ' + gitHubToken}}
    return fetch(url, options)
        .then(res => res.json())
        .then(extractDateOfLastPushEvent)
        .catch(console.error);
}

lastPushDate("").then(console.log);