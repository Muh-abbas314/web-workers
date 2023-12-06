let BgBtn=document.getElementById("Bg-Btn")
let SumBtn=document.getElementById("sum")
let answer=document.getElementById("answer")

const worker=new Worker('worker.js')





SumBtn.addEventListener("click",(e)=>{
worker.postMessage("Start working wage boy!!!")
    // let sum=0
// for(let i=0;i<2334343;i++)
// {
//     sum+=i
//     
// }
})
worker.onmessage=(message)=>{
    answer.textContent=` ${message.data}`
}

BgBtn.addEventListener("click",(e)=>{
    if(document.body.style.background!=="green")
    { document.body.style.background='green'}
    else{
        document.body.style.background="blue"
    }
})