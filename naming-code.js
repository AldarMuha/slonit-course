function sum(nums) {
    let total = 0;
    nums.forEach(num => {
        total += num;
    });
    return total;
}

let costsBuyers = [10000, 20000, 30000];
console.log(sum(costsBuyers));