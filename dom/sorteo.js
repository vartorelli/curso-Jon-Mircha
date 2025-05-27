const d = document;

export default function draw(btn,selector){
    const getWinner = (selector) =>{
        const $players = d.querySelectorAll(selector),
        random = Math.floor(Math.random()*$players.length),
        winner = $players[random];
        return `El Ganador es ${winner.textContent}`// text.content por q $players es un nodeList con el codigo Html de cada uno de la lista <li.player>JavasScript</li>
    }
    d.addEventListener("click",(e)=>{
        if(e.target.matches(btn)){
            let result = getWinner(selector);
            alert(result);
            console.log(result);
        }
    })
}