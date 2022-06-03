// Making variables for every type of button
var inputs = document.querySelector("input");
var numbutton = document.querySelectorAll(".num-btn");
var opsbtn = document.querySelectorAll(".ops");
var clearBtn = document.querySelector(".clear");
var backBtn = document.querySelector(".back");
var result = document.querySelector(".result");

//adding an event for each number button
numbutton.forEach(button => {
    button.addEventListener("click", () => {
        if (inputs.value.length === 1 && button.innerHTML === "0" && parseFloat(inputs.value) === 0) {
            inputs.value = inputs.value;
        }
        else {
            inputs.value += button.innerHTML;
        }
    })
});

//adding an event for each operation button
opsbtn.forEach(button => {
    button.addEventListener("click", (e) => {
        if (inputs.value.length === 0) {
            inputs.value = "";
        }
        if (button.innerHTML === "+/-" && inputs.value.length > 0 && !isNaN(inputs.value)) {
            inputs.value = inputs.value * -1;
        }
        else {
            if (isNaN(inputs.value[inputs.value.length - 1])) {
                inputs.value = inputs.value;
            }
            else {
                if (button.innerHTML === "+/-" && !isNaN(inputs.value[inputs.value.length - 1])) {
                    let end = inputs.value.length - 1;
                    for (let i = inputs.value.length - 1; i >= 0; i--) {
                        if (!isNaN(inputs.value[i])) {
                            end--;
                        }
                        else {
                            break;
                        }
                    }
                    var last = inputs.value.substring(end + 1);
                    var first = inputs.value.substring(0, end + 1);
                    inputs.value = first + (last * -1)
                }
                else {
                    if (button.innerHTML === "x") {
                        inputs.value += "*";
                    } else {
                        inputs.value += button.innerHTML;
                    }
                }
            }
        }
    })
});

//adding an event for clear button which will clear our input box/result box area
clearBtn.addEventListener("click", () => {
    inputs.value = "";
})

//adding an event for backspace button
backBtn.addEventListener("click", () => {
    inputs.value = inputs.value.substring(0, inputs.value.length - 1)
})

//adding an event for result button
result.addEventListener("click", () => {
    if (inputs.value.length === 0) {
        alert("do some operations");
    }
    else {
        var output = "";
        output += Function("return " + inputs.value)();
        inputs.value = output;
    }
})