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