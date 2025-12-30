const dataNama = ["joni","jane","john","mikael","mikaya","Mamika"]

let found = []

function searchStudent (nama,countResult){
    for(let i=0; i<dataNama.length; i++){
        for(let j=0; j<=dataNama[i].length-1; j++){
            // console.log(dataNama[i][j])
            // console.log("---"+nama[0])
            if (dataNama[i][j] === nama [0]){
                for (let k=0; k<nama.length; k++){
                    if (dataNama[i][j+k]===nama[k]){
                        // console.log(nama[k])
                        found[i]=dataNama[i]
                        // console.log(found)
                    }
                }
            }
        }
        
    } console.log(found)

}
// searchStudent("joni")
// let dataSet = []
// for(i=0; i<dataNama.length; i++){
//         for(j=0; j<dataNama[i].length; j++){
//             console.log(dataNama[i][j])
//             // dataSet.push(dataNama[i][j])
//             // dataSet += dataNama[i][j]
            
            
//         }
        
//     }
searchStudent("joni")
// console.log(dataSet)