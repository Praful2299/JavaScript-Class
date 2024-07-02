async function fet(){
    let a= await fetch("http://localhost:3000/Praful")
    let b= await a.json();
    document.getElementById('mine').innerHTML= b.map((p)=>`<div> ${p.Name} </div>
    <div> ${p.Age}</div>
    <div> ${p.Location} </div>
    `)
}
fet();