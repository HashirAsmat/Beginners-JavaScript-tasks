let nums = [0,1,0,3,0,0,7,12];

for(let j=0;j<nums.length;j++){
for(let i=1;i<nums.length;i++){
    if (nums[i-1] === 0 && nums[i] > nums[i-1]){
        [nums[i-1],nums[i]] = [nums[i],nums[i-1]]; //use to swap element of the array without creating a temp variable
    }
}
}

console.log(nums);
