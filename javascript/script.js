var i = 0;
var progressBar = document.getElementById("pb");
function startProgress(){
    if(i <= 100){
        i = i + 1;
        progressBar.value = i;
        progressBar.getElementsByTagName("span")[0].textContent = i;
        console.log(i);
    }
    setTimeout(startProgress, 500);
}
startProgress();