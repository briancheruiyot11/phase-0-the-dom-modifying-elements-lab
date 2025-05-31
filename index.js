const main = document.getElementById("main");

if (main) {
    main.innerHTML = "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>by: Byron Q. Poodle, Esq., BA.</em></p>";
}

if (main) {
    main.style.height = "300px";
    main.style.backgroundColor = "#276478";
    main.textContent = "You've changed what's on the screen!";
    main.style.fontSize = "24px";
    main.style.marginLeft = "30px";
    main.style.lineHeight = 2;
}

if (main) {
    main.className = "pet-listing dog";
    console.log("Main element class after className:", main.className);
    main.classList.remove("dog");
    main.classList.add("cat", "sale");
    console.log("Main element class after classList:", main.className);
}

if (main) {
    main.remove();
}

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Brian Cheruiyot is the champion";
document.body.append(newHeader);

const element = document.createElement("div");
document.body.append(element);

const ul = document.createElement("ul");

for (let i = 0; i < 3; i++) {
    const li = document.createElement("li");
    li.textContent = (i + 1).toString();
    ul.append(li);
}

element.append(ul);

const firstLiInUl = ul.querySelector("li");
if (firstLiInUl) {
    firstLiInUl.textContent = "Hi there!";
    console.log(firstLiInUl.textContent);
}

const currentUl = document.getElementsByTagName("ul")[0];
if (currentUl) {
    const secondChild = currentUl.querySelector("li:nth-child(2)");
    if (secondChild) {
        currentUl.removeChild(secondChild);
        console.log("Removed the second li.");
    }
}

if (currentUl) {
    currentUl.remove();
    console.log("Removed the entire ul.");
}