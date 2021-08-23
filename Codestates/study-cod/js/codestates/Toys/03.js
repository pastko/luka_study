// toy 3 
// const isSubsetOf = function (base, sample) {
//     // TODO: 여기에 코드를 작성합니다.

//     let s = sample.filter(e=>{
//         let i = base.filter(f=>f===e)
//          console.log(i)
//         return i.length > 0})
//     console.log(s);
    
//     return (s).length === sample.length
// };

//toy
const isSubsetOf = function (base, sample) {
    // TODO: 여기에 코드를 작성합니다.
    let ob = {};
    let baseCopy = base.map(e=>ob[e] = true);
    let filterSample = sample.filter(e=>ob[e] === true)
    console.log(filterSample);
    return filterSample.length === sample.length
};
  



// let base = [1, 2, 3, 4, 5];
// let sample = [1, 3];
// //let sample = [6, 7];
// let output = isSubsetOf(base, sample);

// console.log(output);
