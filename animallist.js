fuction Loop() {
	for (var i = 1; i<5; i++) {
  alert(document.getElementById(String(i)).innnerHTML);
  if (document.getElementById(string(i)).innerHTML == "") {
  	document.getElementById(String(i)).innerHTML = "next");
    break;
    }
   }
  }
  
function wordcount (i) {
	return str.split(" ").length;
}
console.log(wordcount("i"));