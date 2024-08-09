const graph = [
    [0, 10, 100, 100, 9],
    [10, 100, 4, 100, 100],
    [100, 4, 100, 6, 15],
    [100, 100, 6, 100, 7],
    [9, 100, 15, 7, 100]
];

let shortestWay = [0, 10, 100, 100, 9];
let filtredArr = [...shortestWay];

for (let i = 0; i < 5; i++) {
    let current = filtredArr.indexOf(Math.min(...filtredArr.filter(val => val !== 0)));
    for (let index = 0; index < shortestWay.length; index++) {
        if (graph[current][index] + shortestWay[current] < shortestWay[index]) {
            shortestWay[index] = graph[current][index] + shortestWay[current];
        }
    }
    filtredArr[current] = Infinity;
}

console.log("Shortest Way:", shortestWay);

const data = {
    PC:10,
    Laptop:11,
    Phones:12,
    Cases:13
}
const one = document.querySelector(".one")
one.innerHTML=`
    <span class="data">PC x${data["PC"]}</span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M12 6V0H4v6H0v7h16V6zm-5 6H1V7h2v1h2V7h2zM5 6V1h2v1h2V1h2v5zm10 6H9V7h2v1h2V7h2zM0 16h3v-1h10v1h3v-2H0z"/></svg>`
const two = document.querySelector(".two")
two.innerHTML=`
    <span class="data">Laptop x${data["Laptop"]}</span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M12 6V0H4v6H0v7h16V6zm-5 6H1V7h2v1h2V7h2zM5 6V1h2v1h2V1h2v5zm10 6H9V7h2v1h2V7h2zM0 16h3v-1h10v1h3v-2H0z"/></svg>`
const three = document.querySelector(".three")
three.innerHTML=`
    <span class="data">Phones x${data["Phones"]}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M12 6V0H4v6H0v7h16V6zm-5 6H1V7h2v1h2V7h2zM5 6V1h2v1h2V1h2v5zm10 6H9V7h2v1h2V7h2zM0 16h3v-1h10v1h3v-2H0z"/></svg>`
const four = document.querySelector(".four")
four.innerHTML=`
    <span class="data">Cases x${data["Cases"]}</span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M12 6V0H4v6H0v7h16V6zm-5 6H1V7h2v1h2V7h2zM5 6V1h2v1h2V1h2v5zm10 6H9V7h2v1h2V7h2zM0 16h3v-1h10v1h3v-2H0z"/></svg>`

    function AddToOrder() {
        const robot = document.querySelector(".robot")
        const Cart = document.querySelector(".Cart")
        const select = document.querySelector(".select")
        const amount = document.querySelector(".amount")
        if (select.value=="PC") {
            robot.classList.add("cash-one")
            setTimeout(()=>{
            robot.classList.remove("cash-one")
            },1000)
            data["PC"]=data["PC"]-amount.value
            one.innerHTML=`
            <span class="data">PC x${data["PC"]}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M12 6V0H4v6H0v7h16V6zm-5 6H1V7h2v1h2V7h2zM5 6V1h2v1h2V1h2v5zm10 6H9V7h2v1h2V7h2zM0 16h3v-1h10v1h3v-2H0z"/></svg>`
        }
        if (select.value=="Laptop") {
            data["Laptop"]=data["Laptop"]-amount.value
            robot.classList.add("cash-two")
            setTimeout(()=>{
                robot.classList.remove("cash-two")
            },1000)
            two.innerHTML=`
            <span class="data">Laptop x${data["Laptop"]}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M12 6V0H4v6H0v7h16V6zm-5 6H1V7h2v1h2V7h2zM5 6V1h2v1h2V1h2v5zm10 6H9V7h2v1h2V7h2zM0 16h3v-1h10v1h3v-2H0z"/></svg>`
        }
        if (select.value=="Phones") {
            robot.classList.add("cash-three")
            setTimeout(()=>{
                robot.classList.remove("cash-three")
            },1000)
            data["Phones"]=data["Phones"]-amount.value
            three.innerHTML=`
            <span class="data">Phones x${data["Phones"]}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M12 6V0H4v6H0v7h16V6zm-5 6H1V7h2v1h2V7h2zM5 6V1h2v1h2V1h2v5zm10 6H9V7h2v1h2V7h2zM0 16h3v-1h10v1h3v-2H0z"/></svg>`
        }
        if (select.value=="Cases") {
            setTimeout(()=>{
                robot.classList.remove("cash-four")
            },1000)
            robot.classList.add("cash-four")
            data["Cases"]=data["Cases"]-amount.value
            four.innerHTML=`
            <span class="data">Cases x${data["Cases"]}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M12 6V0H4v6H0v7h16V6zm-5 6H1V7h2v1h2V7h2zM5 6V1h2v1h2V1h2v5zm10 6H9V7h2v1h2V7h2zM0 16h3v-1h10v1h3v-2H0z"/></svg>`
        }
        Cart.innerHTML+=`<span class="item">
        <span>
        ${select.value}
        x${amount.value}
        </span>
        </span>`
    }