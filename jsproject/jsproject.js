let btn = document.getElementById("btn")
let text = document.getElementById("txt")
let numtrys=0
let numfound=false
let phonenumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let idx=0
let colornames = ["red", "blue", "white", "aqua", "beige", "pink", "brown", "coral", "cyan", "darkgreen"];
btn.addEventListener("click",function(){
    if(numfound==false)
    {
        numtrys++
    for (let i = 0; i < 10; i++) {
        let value = phonenumber[i];
        if (value + 1 < 10) {
          value++;
        } else if (value + 1 >= 10) {
          value = 0;
        }
        phonenumber[i] = value;
      }
      let str = "";
      for (let i = 0; i < 10; i++) {
        let value = phonenumber[i];
        if(i==0)
        {
            str+="+1 ("+value
        }
        else if (i==3)
        {
            str+=") "+ value
        }
        else
        {
            str += value;
        }
      }
      text.innerHTML=str
      text.style.color= colornames[idx]
    idx++
    if(idx>=10) 
    {
        idx=0
    }

    }
    else
    {
        alert("number already found and submitted")
    }
    
    

})
btnenter.addEventListener("click",function(){
numfound=true
alert("number submitted")
})