async function fet(){
    let a= await fetch("https://jsonplaceholder.typicode.com/photos")
    let b= await a.json();
    document.getElementById('demo').innerHTML=b.map((e)=> `<div> <img src="${e.url}" </div>
    <div> ${e.id}</div>`)
}
fet()