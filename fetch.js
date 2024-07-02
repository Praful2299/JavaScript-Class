async function feti(){
    let a =await fetch("http://localhost:3000/student")
    let b=await a.json();
    document.getElementById('mine').innerHTML=b.map((p)=> `<div> ${p.id} </div>
    <div> ${p.Name} </div>
    <div> ${p.Age} </div>
    <div> ${p.City} </div>`)
}
feti()