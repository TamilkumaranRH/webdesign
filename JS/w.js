let result = "";
const n = 15;
const stringToRepeat = "hello--";
for (let i = 0; i < n; i++) {
    
    console.log(stringToRepeat,i)

}
i=1;
parent=document.getElementById("parent")
function new1()
{ 
   
        iter=i
        const newDiv=document.createElement("div");
        newDiv.textContent=stringToRepeat 
        parent.append(newDiv);
        i++;
}