/*function move() {
    var i = 0;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 0);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}
*/

function progressCalculate(a, b) {
    // a is the done courses, b is the required courses
    var progress = parseInt(100 * (a / b));
    return progress;
}

function progressBar() {
    var done = 12; //some input
    var active = 2;
    var potential = done + active;
    document.getElementById("potential").innerHTML = potential;
    var total = 20; //some input
    if(potential > total){
        potential = total;
    }
    var percentage = progressCalculate(potential, total);
    document.getElementById("done").innerHTML = done;
    document.getElementById("active").innerHTML = active;
    document.getElementById("myBar").style.width = percentage + "%";
}