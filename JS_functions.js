// FUNCTIONS FROM Website.html
function openFormRegisterMain() {
  document.getElementById("myFormRegister").style.display = "block";
  document.getElementById("myFormLogin").style.display = "none";
}

function closeFormRegisterMain() {
  document.getElementById("myFormRegister").style.display = "none";
}

function openFormLoginMain() {
  document.getElementById("myFormLogin").style.display = "block";
  document.getElementById("myFormRegister").style.display = "none";
}
        
function closeFormLoginMain() {
  document.getElementById("myFormLogin").style.display = "none";
}

// FUNCTIONS FROM tools.html
function openFormLogin() {
  document.getElementById("myFormLogin").style.display = "block";
  document.getElementById('tool_options').style.filter = "blur(5px)";
    
  for (let i = 1; i < 6; i++) {
    document.getElementById("btn" + i).addEventListener("mouseover", mouseOver);
    document.getElementById("btn" + i).addEventListener("mouseout", mouseOut);
  }

  document.getElementById("myFormRegister").style.display = "none";
}

function closeFormLogin() {
  document.getElementById("myFormLogin").style.display = "none";
  document.getElementById('tool_options').style.filter = "blur(0px)";
}

function mouseOver() {
  for (let i = 1; i < 6; i++) {
    document.getElementById("btn" + i).style.backgroundColor = "#4691cf";
    document.getElementById("btn" + i).style.cursor = "default";
  }
}

function mouseOut() {
  for (let i = 1; i < 6; i++) {
    document.getElementById("btn" + i).style.backgroundColor = "#4691cf";
  }
}

// FUNCTIONS FROM SearchDatabase.html
function showStructure(id) {
  let fold_class = document.getElementById("fold_classes");
  let class_check = document.getElementById(id);
  let structure = document.getElementById(id + "2");
  
  if (class_check.checked == true) {
    fold_class.classList.add("color_outline");
    fold_class.style.display = "block";
    structure.style.display = "block";
  } else {
    fold_class.style.display = "none";
    structure.style.display = "none";
  }
}

function showEnzymeTypes() {
  var element = document.getElementById("enzyme_check");
  var enzyme_types = document.getElementById("enzyme_types");

  if (element.checked == true) {
    enzyme_types.classList.add("color_outline");
    enzyme_types.style.display = "block";  
      
    for (let i = 1; i < 7; i++) {
      var enzyme_element = document.getElementById("enzyme" + i);
      enzyme_element.style.display = "block";  
    }
  } else {
      enzyme_types.style.display = "none";
      for (let i = 1; i < 7; i++) {
        var enzyme_element = document.getElementById("enzyme" + i);
        enzyme_element.style.display = "none";  
      }
  }
}

function handleChange(radio_button) {
  let year_range = document.getElementById("year");
  let year_from = document.getElementById("year_from");
  let year_to = document.getElementById("year_to");
  let label1 = document.getElementById("year_label1");
  let label2 = document.getElementById("year_label2");
  let label3 = document.getElementById("year_label3");

  if (radio_button.value == "one_year") {
      year_range.disabled = false;
      year_range.style.opacity = 1;
      year_range.style.filter = "blur(0px)";
      label1.style.color = "black";
      label1.style.opacity = 1;
      label1.style.filter = "blur(0px)";

      year_from.disabled = true;
      year_to.disabled = true;

      year_from.style.opacity = 0.3;
      year_to.style.opacity = 0.3;

      year_from.style.filter = "blur(0.9px)";
      year_to.style.filter = "blur(0.9px)";

      label2.style.filter = "blur(0.9px)";
      label3.style.filter = "blur(0.9px)";

      year_from.style.cursor = "default";
      year_to.style.cursor = "default";

      label2.style.color = "rgb(192, 192, 192)";
      label3.style.color = "rgb(192, 192, 192)";
  }
  
  else if (radio_button.value == "year_range") {
      year_from.disabled = false;
      year_to.disabled = false;

      year_from.style.opacity = 1;
      year_to.style.opacity = 1;

      year_from.style.filter = "blur(0px)";
      year_to.style.filter = "blur(0px)";

      label2.style.color = "black";
      label3.style.color = "black";

      label2.style.opacity = 1;
      label3.style.opacity = 1;

      label2.style.filter = "blur(0px)";
      label3.style.filter = "blur(0px)";

      year_range.disabled = true;
      year_range.style.opacity = 0.3;
      year_range.style.filter = "blur(0.9px)";
      year_range.style.cursor = "default";
      label1.style.filter = "blur(0.9px)";
      label1.style.color = "rgb(192, 192, 192)";
  }
  
  
}

function showYear() {
  let sliders = ["year", "year_from", "year_to"];
  
  for (let i = 0; i < 3; i++) {
    let y = i + 1;
    let slider = document.getElementById(sliders[i]);
    let output = document.getElementById("demo" + y);
    output.innerHTML = slider.value;

    slider.oninput = function() {
      output.innerHTML = this.value;
    } 
  }
}