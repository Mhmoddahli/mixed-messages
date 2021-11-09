//words arrays



//random words selectors
const firstWord=arr=>{
    let index=Math.floor(Math.random()*arr.length)
    return arr(index)
}

const secondWord=arr=>{
    let index=Math.floor(Math.random()*arr.length)
    return arr(index)
}

const thirdWord=arr=>{
    let index=Math.floor(Math.random()*arr.length)
    return arr(index)
}



//message generator
const messageGenerator=(first, second, third)=>{
    console.log(`${first} ${second} ${third}`)
    return `${first} ${second} ${third}`
}