// const myURL = 'https://pokeapi.co/api/v2/ability/';
// fetch(myURL)
// .then(
//   function(response) {
//     if (response.status !== 200) {
//       console.log('Looks like there was a problem. Status Code: ' +
//         response.status);
//       return;
//     }
//     response.json().then(function(data){
//       console.log(data);
//     });
//   }
// )
// .catch(function(err){
//   console.log("Fetch went wrong");
// })

function getTodos() {
  const myURL = 'https://pokeapi.co/api/v2/ability/';
  fetch(myURL).then
  REQ.onload = () => {
    if (REQ.status === 200) {
      console.log(REQ.response);
      console.log(REQ.response.title);
      for (let i = 0; i < 200; i++) {
        document.querySelector("#resp").innerHTML = REQ.response.results[i].name;
        console.log((document.querySelector("#resp").innerHTML = REQ.response[i].userId));
        console.log((document.querySelector("#resp").innerHTML = REQ.response[i].id));
        console.log((document.querySelector("#resp").innerHTML = REQ.response[i].title));
        console.log((document.querySelector("#resp").innerHTML = REQ.response[i].completed));
      }
    }
  }
}   
    // Examine the text in the response
//     response.json().then(function(data) {
//       console.log(data);
//       for (let i = 0; i < 200; i++) {
//         document.querySelector("#resp").innerHTML = data[i].id;
//         console.log(
//           (document.querySelector("#resp").innerHTML = data[i].userId)
//         );
//         console.log(
//           (document.querySelector("#resp").innerHTML = data[i].title)
//         );
//         console.log(
//           (document.querySelector("#resp").innerHTML =
//           data[i].completed)
//         );
//         console.log(
//           (document.querySelector("#resp").innerHTML =
//           data[i].completed)
//         );
//         let para = document.createElement("P"); // Create a <p> element
//         para;
//         para.className = "alert alert-danger col-md-8";
//         para.innerText = `The User id is : ${(document.querySelector(
//           "#resp"
//         ).innerHTML = data[i].id)} \n The User id is :  ${(document.querySelector(
//           "#resp"
//         ).innerHTML = data[i].userId)} \n  The title is : ${(document.querySelector(
//           "#resp"
//         ).innerHTML = data[i].title)}  \n  The completed status is : ${(document.querySelector(
//           "#resp"
//         ).innerHTML = data[i].completed)}`; // Insert text
//         let myDiv = document.getElementById("todos");
//         myDiv.appendChild(para);
//       }
//     });
//   }
// )
// .catch(function(err) {
//   console.log('Fetch Error :-S', err);
//  });