class Remote{
    constructor(brand, product, color, price){
        this.brand = brand;
        this.product = product;
        this.color = color;
        this.price = price;
    }

    powerOn(){
        console.log("The machine is on now. ");
    }
    poweroff(){
        console.log("The machine is off now. ");
    }
}

let remote = new Remote("Sony", "TV", "Black", 50000);
let remote1 = new Remote("LG", "TV", "White", 500);

console.log(remote);
console.log(remote1);

remote.powerOn();