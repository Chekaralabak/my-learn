function onButtonClick () {

  var button = document.getElementById("secondButtonid");

    if (button.classList.contains("button-pressed")) {

        button.classList.remove("button-pressed");
        button.textContent = "Antropova";
    } else {
        button.classList.add("button-pressed");
        button.textContent = "Tatyna";} 
    }

function onButtonClick (){   
        var button = document.getElementById("3Buttonid");

        if (button.classList.contains("button2-pressed")) {

            button.classList.remove("button2-pressed");
            button.textContent = "GOOD";
        } else {
            button.classList.add("button2-pressed");
            button.textContent = "GERL";
        }
    }
