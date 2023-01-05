var parts;

    async function getText() {
    let myObject = await fetch("questions.php");
    let myText = await myObject.text();
    // console.log(myText);
    var jamal = JSON.parse(myText);
    zagzoug(jamal);
    }
    getText();
    function zagzoug(data)
    {
        let random;
        random = Math.floor((Math.random() * data.length));
        // console.log(data.question);
        document.getElementById("option-one-label1").innerHTML = data[random].options;
        document.getElementById("option-one-label").innerHTML = data[random].question;
    }