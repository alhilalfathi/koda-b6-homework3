
const dataNama = ["joni","jane","john","mikael","Jono","mikaya","Mamika","joko"]

const hasil = []

const lowerCaseMap = {
    A: "a",
    B: "b",
    C: "c",
    D: "d",
    F: "f",
    G: "g",
    H: "h",
    I: "i",
    J: "j",
    K: "k",
    L: "l",
    N: "n",
    O: "o",
    P: "p",
    Q: "q",
    R: "r",
    S: "s",
    T: "t",
    U: "u",
    V: "v",
    W: "w",
    X: "x",
    Y: "y",
    Z: "z"
}
function toLowerManual(str) {
  let hasil = ""
  for (let i=0; i<str.length; i++) {
    if (lowerCaseMap[str[i]]) {
      hasil += lowerCaseMap[str[i]]
    } else {
      hasil += str[i]
    }
  }
  return hasil
}


function searchNama(keyword, cb) {
  
  const keyLow = toLowerManual(keyword)

  for (let a=0; a<dataNama.length; a++) {
    let nama = dataNama[a]
    let cocok = false

    for (let i=0; i<=nama.length - keyLow.length; i++) {
      let sama = true

      for (let j=0; j<keyLow.length; j++) {
        let hurufNama = lowerCaseMap[nama[i + j]] || nama[i + j]
        if (hurufNama !== keyLow[j]) {
          sama = false
          break
        }
      }

      if (sama) {
        cocok = true
        break
      }
    }

    if (cocok) {
      hasil.push(nama)
    }
  }
  cb()
  return hasil
}
function counter(){
    console.log(hasil.length)
    
}

console.log(searchNama("JoN", counter))
