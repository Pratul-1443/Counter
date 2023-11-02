const countval=document.querySelector("#pp");

const decrement=() => {
    let value=parseInt(countval.innerText);
    value=value-1;
    countval.innerText=value;
};

const increment=()=>{
    let value=parseInt(countval.innerText);
    value=value+1;
    countval.innerText=value;
};