// DataStructure & Algorithm 
// HACK: 15_[Greedy] 짐 나르기

function movingStuff(stuff, limit) {
    // TODO: greedy
    let count = 0;

    stuff = stuff.reverse();
    do
    {
        let movin = limit - stuff.shift();
        console.log(stuff)
        console.log(movin)
        count++;
        let a = stuff.find(e=>e <= movin);
        if(stuff.indexOf(a) > -1)
        {
            
            stuff.splice(stuff.indexOf(a),1);
        }
    }while(stuff.length >0)
    

    return count;
}

let output = movingStuff([70, 50, 80, 50], 100);
console.log(output); // 3

output = movingStuff([60, 73, 80, 87, 103, 109, 119, 123, 128, 129, 136, 146, 153, 168, 182], 200);
console.log(output); // 11