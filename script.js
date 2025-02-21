var arr= [];
var curr=0;
function add(){
    let k = document.getElementsByTagName("input")[0].value;
    let f = document.getElementById("num");
    if(k==""){
        return;
    }
    else{
        curr++;
        f.textContent = curr;
        let ans="<ol>";
        arr.push(k);
        for(let word of arr){
            ans+="<li>"+word+"</li>     ";
        }
        ans+="</ol>    ";
        let e = document.getElementById("li");
        e.innerHTML = ans;
        let elements = document.getElementsByTagName("li");
        for(let i=0 ; i<elements.length ; i++){
            elements[i].addEventListener("click" , ()=>{
                remove(i);
            })
        }
    }
}
function remove(i){
    let x = [];
    for(let j=0 ; j<arr.length ; j++){
        if(j!=i) x.push(arr[j]);
    }
    arr = x;
    curr--;
    let f = document.getElementById("num");
    f.textContent = curr;
    let ans="<ol>";
    for(let word of arr){
       ans+="<li>"+word+"</li>     ";
    }
    ans+="</ol>    ";
    let e = document.getElementById("li");
    e.innerHTML = ans;
    let elements = document.getElementsByTagName("li");
    for(let i=0 ; i<elements.length ; i++){
           elements[i].addEventListener("click" , ()=>{
           remove(i);
       })
    }
}
function cl(){
    curr = 0;
    let f = document.getElementById("num");
    f.textContent=0;
    let a = document.getElementById("li");
    a.textContent ="No movies selected so far!";
}