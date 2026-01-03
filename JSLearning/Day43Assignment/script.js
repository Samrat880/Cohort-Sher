let arr = [
    {
        team: 'CSk',
        captain: 'MS Dhoni',
        viceCaptain: 'Ruturaj Gaikwad',
        championshipsWon: 4
    },
    {
        team: 'MI',
        captain: 'Rohit Sharma',
        viceCaptain: 'Kieron Pollard',
        championshipsWon: 5
    },
    {
        team: 'RCB',
        captain: 'Faf du Plessis',
        viceCaptain: 'Virat Kohli',
        championshipsWon: 0
    },
    {
        team: 'KKR',
        captain: 'Shreyas Iyer',
        viceCaptain: 'Andre Russell',
        championshipsWon: 2
    },
    {
        team: 'SRH',
        captain: 'Aiden Markram',
        viceCaptain: 'Abdul Samad',
        championshipsWon: 1
    },
    {
        team: 'PBKS',
        captain: 'Shikhar Dhawan',
        viceCaptain: 'Liam Livingstone',
        championshipsWon: 0
    },
    {
        team: 'DC',
        captain: 'David Warner',
        viceCaptain: 'Rishabh Pant',
        championshipsWon: 1
    }
]

let btn = document.querySelector('button');
let h1 = document.querySelector('h1');
let main = document.querySelector('main')

btn.addEventListener('click', function(){

    let num = arr[Math.floor(Math.random()*arr.length)]

    h1.innerText = num.team
})