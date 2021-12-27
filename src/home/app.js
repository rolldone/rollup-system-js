export default function(){
  setTimeout(()=>{
    document.querySelector('h1').innerHTML = "Is Changed!!";
    alert("changed");
  },5000);
}
