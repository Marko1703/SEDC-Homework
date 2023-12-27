console.log("It's working!");

function storyTeller(who, what, when) {
    const storyDiv = document.getElementById("story");

    let story = `${who} was really ${what} in the ${when}!`;

    storyDiv.innerHTML = story;
}