
var dark = document.getElementById('pro');
var flag = 1;
dark.onclick = function(){
if(flag === 1)
{
document.querySelector(".top-container").classList.add("darkbg");
document.querySelector(".sun").setAttribute("src","images/moon.png");
document.querySelector("#pro").textContent = "Light Mode";
document.querySelector(".bottom-container").classList.add("darkbg");
document.getElementsByTagName("h1")[0].style.color = "#005f99";
var a = document.getElementsByTagName("a").length;
for(i=0;i<a;i++)
{
  document.getElementsByTagName("a")[i].style.color = "#005f99";
}
document.querySelector(".BUTTON_GTN").style.color = "white";
document.querySelector(".subtitle").style.color = "#005f99";
flag = 0;
}
else{
  document.querySelector(".top-container").classList.remove("darkbg");
  document.querySelector(".sun").setAttribute("src","https://www.transparentpng.com/thumb/sun/clipart-happy-sun-png-34.png");
  document.querySelector("#pro").textContent = "Dark Mode";
  document.querySelector(".bottom-container").classList.remove("darkbg");
  document.getElementsByTagName("h1")[0].style.color = "#ff7b54";
  var a = document.getElementsByTagName("a").length;
  for(i=0;i<a;i++)
  {
    document.getElementsByTagName("a")[i].style.color = "#ff7b54";
  }
  document.querySelector(".BUTTON_GTN").style.color = "white";
  document.querySelector(".subtitle").style.color = "#ff7b54";
  flag = 1;
  }
}
