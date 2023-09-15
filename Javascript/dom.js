const head = document.head;
console.log(head);
const body = document.body;
console.log(body);

const para = document.createElement("p");
para.innerText = "Hello DOM!";
body.append(para);

const header = document.getElementById("header");
header.style.backgroundColor = "yellow";
console.log(header);

let post = document.querySelector("div");
post.className = "feature-post";
console.log(post);

// let posts = document.querySelectorAll("div");
// console.log(posts);

const posts = document.querySelectorAll(".post");
console.log(posts);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// numbers.forEach(item => {
//     console.log(`this is ${item}`);
// })

posts.forEach(post => {
    console.log(post.innerHTML);
    post.addEventListener("click",
        (event) => { console.log(event.target) }
    )
})


