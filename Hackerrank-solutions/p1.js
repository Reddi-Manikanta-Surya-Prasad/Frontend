
// https://www.hackerrank.com/contests/mountblue-technologies/challenges/sock-merchant
function sockMerchant(n, ar) {
    // Write your code here
    ar.sort();
    let count = 0
    for(let i=0;i<ar.length;i++){
        if(ar[i] == ar[i+1]){
            count++;
            i++;
        }
    }
    return count;

}
