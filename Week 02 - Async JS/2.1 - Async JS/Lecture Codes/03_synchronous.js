 //Synchronous code is executed line by line, in the order it's written. 
 // Each operation waits for the previous one to complete before moving on to the next one.

 function sum(n) {
    let ans  = 0;
    for(let i = 0; i <=n; i++) {
        ans += i;
    }
    return ans;
 }

 let ans = sum(10);
 console.log(ans)
 let ans2 = sum(50)
 console.log(ans2)
 let ans3 = sum(100);
 console.log(ans3)