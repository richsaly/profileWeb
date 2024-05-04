function opennav() {
    document.getElementById("slidenav").style.width = "350px";
    document.getElementById("menuicon").style.display = "none";
}

function closenav() {
    document.getElementById("slidenav").style.width = "0";
    document.getElementById("menuicon").style.display = "block";
}


// tabing section
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
   
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
       tabcontent[i].style.display = "none";
    }
   
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
       tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
   
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
   }
   
