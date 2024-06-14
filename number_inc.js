let counter = 0;

document.getElementById("increment-btn").addEventListener("click", function() {
    counter++;
    document.getElementById("counter").innerHTML = "Counter: " + counter;
});
