
//https://www.hackerrank.com/contests/mountblue-technologies/challenges/simple-array-sum/problem
function simpleArraySum(ar) {
    // Write your code here
    
    let sum = 0
    for(let i=0;i<ar.length;i++){
        sum = sum+ar[i]
    }
    return sum;

}