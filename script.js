function whoAmI() {
    let name = prompt("who are you?", "your name goes here!");
    let text;

    if (name == null || name == "" || name == "your name goes here!") {
        document.getElementById('badBtn').textContent = 'try again';
        return;
      } else {
        text = `hey, ${name}!`;
        // alert(text);
        document.getElementById('badBtn').textContent = text;
        setTimeout(howAmI(name), 2000)

        return name;
    };
};


function howAmI(name) {
    document.getElementById('badBtn').textContent = 'how are you?';

    let state = prompt(` hey ${name}, how are you?`);
s
    if (state == null || state == "" || state == "your state goes here!") {
        document.getElementById('badBtn').textContent = 'try again';
        return;
    } else if (state.includes('bad') === true) {
        document.getElementById('badBtn').textContent = "i'm sorry";
        return;
    } else {
        // alert(text);
        document.getElementById('badBtn').textContent = "i'm glad!";
    };
};
// const messages = ["UNDER CONSTRUCTION", "You can't see this yet", "I'm not done, please stop clicking! :(", "This is your last warning...."]

