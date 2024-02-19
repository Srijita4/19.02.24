document.getElementById('greetButton').addEventListener('click', function() {
    var name = document.getElementById('nameInput').value;
    var quotation = "The most difficult thing is the decision to act,the rest is merely tenacity. — Amelia Earhart.";
    var greetingMessage = "Hey, " + name + "! Here's a quote for you: \"" + quotation + "\"";
    document.getElementById('greetingMessage').innerText = greetingMessage;
    });g