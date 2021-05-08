/**
 * 
 * 
 * 
 *   console.log(i +":"+ j +"=" + answer);
                console.log(element[i][j] +"|"+ element[i][j+1]);
                console.log(element[i+1][j] +"|"+ element[i+1][j+1]);
 * 
 * 
 * 
*/



function solution(s) {
    let answer = -1;
    let result = [];
    s.forEach(element => {
        for (let i = 0; i < 3; ++i) 
        {
            for(let j = 0 ; j < 3 ; ++j)
            {
                console.log(i +":"+ j +"=" + answer);
                console.log(element[i][j] +"|"+ element[i][j+1]+"|"+element[i][j+2]);
                console.log(element[i+1][j] +"|"+ element[i+1][j+1]+"|"+element[i+1][j+2]);
                console.log(element[i+2][j] +"|"+ element[i+2][j+1]+"|"+element[i+2][j+2])
              
                //p[0][0]
                if (element[i][j] === "P") {

                    if (element[i][j + 1] === "P") {
                        answer = 0;
                        break;
                    }
                    if (element[i + 1][j] === "P") {
                        answer = 0;
                        break;
                    }
                    if (element[i + 1][j + 1] === "P") {
                        if (element[i + 1][j] !== "X" && element[i][j + 1] !== "x") {
                            answer = 0;
                            break;
                        }
                    }

                    if (element[i][j + 2] === "P") {
                        if (element[i][j + 1] !== "X") {
                            answer = 0;
                            break;
                        }
                    }
                    if (element[i + 2][j] === "P") {
                        if (element[i+1][j] !== "X") {
                            answer = 0;
                            break;
                        }
                    }
                }

                //p[0][1]
                if (element[i][j + 1] === "P") {
                    if (element[i][j + 2] === "P") {
                        answer = 0;
                        break;
                    }
                    if (element[i + 1][j + 1] === "P") {
                        answer = 0;
                        break;
                    }
                    if (element[i + 2][j + 1] === "P") {
                        if (element[i+1][j+1] !== "X") {
                            answer = 0;
                            break;
                        }
                    }

                    if (element[i + 1][j + 2] === "P") {
                        if (element[i + 1][j + 1] !== "X" && element[i][j + 2] !== "x") {
                            answer = 0;
                            break;
                        }
                    }

                    if (element[i + 1][j] === "P") {
                        if (element[i + 1][j + 1] !== "X" && element[i][j] !== "x") {
                            answer = 0;
                            break;
                        }
                    }
                }


                //p[1][0]
                if (element[i + 1][j] === "P") {
                    if (element[i + 1][j + 1] === "P") {
                        answer = 0;
                        break;
                    }
                    if (element[i + 1][j + 2] === "P") {
                        if (element[i+1][j+1] !== "X") {
                            answer = 0;
                            break;
                        }
                    }
                    if (element[i + 2][j] === "P") {
                        answer = 0;
                        break;
                    }
                    if (element[i + 2][j + 1] === "P") {
                        if (element[i + 1][j + 1] !== "X" && element[i + 2][j] !== "x") {
                            answer = 0;
                            break;
                        }
                    }
                }

                //p[0][2]
                if (element[i][j + 2] === "P") {
                    if (element[i + 1][j + 2] === "P") {
                        answer = 0;
                        break;
                    }
                    if (element[i + 2][j + 2] === "P") {
                        if (element[i+1][j+2] !== "X") {
                            answer = 0;
                            break;
                        }
                    }
                    if (element[i + 1][j + 1] === "P") {
                        if (element[i][j + 1] !== "X" && element[i + 1][j + 2] !== "x") {
                            answer = 0;
                            break;
                        }
                    }
                }

                //p[2][0]
                if (element[i + 2][j] === "P") {
                    if (element[i + 2][j + 1] === "P") {
                        answer = 0;
                        break;
                    }
                    if (element[i + 2][j + 2] === "P") {
                        if (element[i+2][j+1] !== "X") {
                            answer = 0;
                            break;
                        }
                    }
                    if (element[i + 1][j + 1] === "P") {
                        if (element[i + 1][j] !== "X" && element[i + 2][j + 1] !== "x") {
                            answer = 0;
                            break;
                        }
                    }
                }

                 //p[1][1]
                if (element[i + 1][j + 1] === "P") {
                    if (element[i + 1][j + 2] === "P") {
                        answer = 0;
                        break;
                    }
                    if (element[i + 2][j + 1] === "P") {
                        answer = 0;
                        break;
                    }
                    if (element[i + 2][j + 2] === "P") {
                        if (element[i + 1][j + 2] !== "X" && element[i + 2][j + 1] !== "x") {
                            answer = 0;
                            break;
                        }
                    }
                }

                //p[2][1]
                if (element[i + 2][j + 1] === "P") {
                    if (element[i + 2][j + 2] === "P") {
                        answer = 0;
                        break;
                    }
                }

                //p[1][2]
                if (element[i + 1][j + 2] === "P") {
                    if (element[i + 2][j + 2] === "P") {
                        answer = 0;
                        break;
                    }
                }
                console.log("answer : " + answer);
                console.log("============================");
               if(answer === 0) break;
            }
            if(answer === 0) break;
        }
        if(answer === 0) { result.push(0); answer = -1; }
        else if(answer === -1) { result.push(1); answer = -1; }        
    });   
    
    return result;
}





/**
 * 
 * main core
 * 
 * 
 */


let places = [
    [
        "POOOP", 
        "OXXOX", 
        "OPXPX", 
        "OOXOX", 
        "POXXP"
    ],
    [
        "POOPX", 
        "OXPXP", 
        "PXXXO", 
        "OXXXO", 
        "OOOPP"
    ],
    [
        "PXOPX", 
        "OXOXP", 
        "OXPXX", 
        "OXXXP", 
        "POOXX"
    ],
    [
        "OOOXX", 
        "XOOOX",
        "OOOXX", 
        "OXOOX", 
        "OOOOO"
    ],
    [
        "POOXP", 
        "OOOOX", 
        "OOOOP", 
        "POOOX", 
        "OXPXO"
    ]
];


console.log(solution(places));
