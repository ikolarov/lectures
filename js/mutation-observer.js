const targetNode = document.querySelector(".target");
const output = document.querySelector(".output");
const buttonClass = document.querySelector(".button-class");
const buttonAdd = document.querySelector(".button-add");
const config = { attributes: true, childList: true };

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
    // console.log(mutationList)
    // for (const mutation of mutationList) {
    //     if (mutation.type === "childList") {
    //         output.textContent = "A child node has been added or removed.";
    //     } else if (mutation.type === "attributes") {
    //         output.textContent =
    //             "The " + mutation.attributeName + " attribute was modified.";
    //     }
    // }
    console.log(1)
};

const observer = new MutationObserver(callback);
observer.observe(targetNode, config);

buttonClass.addEventListener("click", () => {
    targetNode.classList.add("green");
});

buttonAdd.addEventListener("click", () => {
    if (targetNode.classList.contains("green")) {
        targetNode.classList.remove("green");
    }
    const div = document.createElement("div");
    div.classList.add("box");
    targetNode.appendChild(div);
});
