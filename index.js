// Your code here
function mapToNegativize(sourceArray) {
  let neg = []
  for (let i = 0; i < sourceArray.length; i++ ) {
    neg.push(-1 * sourceArray[i])
  }
  return neg
}
/////////////
function mapToNoChange(sourceArray) {
  let no = []
  for (let i = 0; i < sourceArray.length; i++ ) {
    no.push(sourceArray[i])
  }
  return no
}
/////////////
function mapToDouble(sourceArray) {
  let d = []
  for (let i = 0; i < sourceArray.length; i++ ) {
    d.push(sourceArray[i]*2)
  }
  return d
}
/////////////
function mapToSquare(sourceArray) {
  let sq = []
  for (let i = 0; i < sourceArray.length; i++ ) {
    sq.push(sourceArray[i] * sourceArray[i])
  }
  return sq
}
