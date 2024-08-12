const graph = [
    [0, 10, 100, 100, 9],
    [10, 100, 4, 100, 100],
    [100, 4, 100, 6, 15],           //Data for Dijkstra's algorithm
    [100, 100, 6, 100, 7],
    [9, 100, 15, 7, 100]
];
const size = {
    PC:0.2,
    Laptop:0.1,
    Phones:0.05,
    Cases:0.03
}

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
} //Dijkstra's algorithm

const data = {
    PC:10,
    Laptop:11,
    Phones:12,
    Cases:13
} // Stock of each item



//visualate stock for every item
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
    
    
    let totalScore = 0
    let totalSize = 0

    //function that add item to order
    function AddToOrder() {
        const robot = document.querySelector(".robot")
        const Cart = document.querySelector(".Cart")
        const select = document.querySelector(".select")
        const amount = document.querySelector(".amount")
        const score = document.querySelector(".totalScore")   
        const sizehtml = document.querySelector(".delivery_size")
        //gettion all html elements that we need
        
        //calculation for get total size   
        totalSize=totalSize+size[select.value]*amount.value

        sizehtml.innerHTML=totalSize.toFixed(2)
        if (totalSize>1) {
            document.getElementById("Box").disabled = true;
        }
        if (totalSize>5) {
            alert("the size of order is too big complete this order")
            return
        }

        if (data[select.value]-amount.value<0) {
            alert("We dont have this in Stock")
            return
        }
        if (select.value=="PC") {

            totalScore=totalScore+shortestWay[3]
            robot.classList.add("cash-one")
            setTimeout(()=>{
            robot.classList.remove("cash-one")
            },1000)
            data["PC"]=data["PC"]-amount.value
            one.innerHTML=`
            <span class="data">PC x${data["PC"]}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M12 6V0H4v6H0v7h16V6zm-5 6H1V7h2v1h2V7h2zM5 6V1h2v1h2V1h2v5zm10 6H9V7h2v1h2V7h2zM0 16h3v-1h10v1h3v-2H0z"/></svg>`
            score.innerHTML=`Total score for this order: ${totalScore}`
        }
        if (select.value=="Laptop") {
            totalScore=totalScore+shortestWay[2]
            data["Laptop"]=data["Laptop"]-amount.value
            robot.classList.add("cash-two")
            setTimeout(()=>{
                robot.classList.remove("cash-two")
            },1000)
            two.innerHTML=`
            <span class="data">Laptop x${data["Laptop"]}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M12 6V0H4v6H0v7h16V6zm-5 6H1V7h2v1h2V7h2zM5 6V1h2v1h2V1h2v5zm10 6H9V7h2v1h2V7h2zM0 16h3v-1h10v1h3v-2H0z"/></svg>`
            score.innerHTML=`Total score for this order: ${totalScore}`
        }
        if (select.value=="Phones") {
            totalScore=totalScore+shortestWay[1]
            robot.classList.add("cash-three")
            setTimeout(()=>{
                robot.classList.remove("cash-three")
            },1000)
            data["Phones"]=data["Phones"]-amount.value
            three.innerHTML=`
            <span class="data">Phones x${data["Phones"]}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M12 6V0H4v6H0v7h16V6zm-5 6H1V7h2v1h2V7h2zM5 6V1h2v1h2V1h2v5zm10 6H9V7h2v1h2V7h2zM0 16h3v-1h10v1h3v-2H0z"/></svg>`
            score.innerHTML=`Total score for this order: ${totalScore}`
        }
        if (select.value=="Cases") {
            totalScore=totalScore+shortestWay[4]
            setTimeout(()=>{
                robot.classList.remove("cash-four")
            },1000)
            robot.classList.add("cash-four")
            data["Cases"]=data["Cases"]-amount.value
            four.innerHTML=`
            <span class="data">Cases x${data["Cases"]}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M12 6V0H4v6H0v7h16V6zm-5 6H1V7h2v1h2V7h2zM5 6V1h2v1h2V1h2v5zm10 6H9V7h2v1h2V7h2zM0 16h3v-1h10v1h3v-2H0z"/></svg>`
            score.innerHTML=`Total score for this order: ${totalScore}`
        }
        //visualization of every elemnt in Cart
        Cart.innerHTML+=`<span class="item">
        ${select.value}
        x${amount.value}
        </span>`

    }
    function Hash(input, key) {
        let hash = '';
        for (let i = 0; i < input.length; i++) {
            hash += String.fromCharCode(input.charCodeAt(i) + key);         // Get ASCII code of every symbol and add it to one string
        }
        return hash;
    }
    function Unhash(hash, key) {
        let original = '';
        for (let i = 0; i < hash.length; i++) {
            // Получаем ASCII-код символа, вычитаем ключ и преобразуем в строку
            original += String.fromCharCode(hash.charCodeAt(i) - key);
        }
        return original;
    }
    function Complete() {
        const elements = document.querySelectorAll('.item');
    let combinedString = '';
    elements.forEach(element => {
    combinedString += element.textContent.replace(/\s+/g, '');
    });
        alert(`Order is completed Your hashed order number is ${Hash(combinedString, 1)}`)
        window.location.reload()
    }