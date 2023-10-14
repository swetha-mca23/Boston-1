 import {boston} from "./boston.js";
         var newboston=boston.data
         var ele="";


for( let i=0;i<newboston.length;i++){
    for(let j=i+1;j<newboston.length;j++){
        if(newboston[i][11]<newboston[j][11])
        {
        let x=newboston[i];
        newboston[i]=newboston[j];
        newboston[j]=x;
        }
    }
}
    var data=newboston.slice(0,5)
    for( let i=0;i<5;i++){
        ele=ele+"<h1>" + data[i][8] + "</h1>" + "<h1>" + data[i][11]+ "</h1>"
    }
            

document.getElementById("app").innerHTML=ele;
    