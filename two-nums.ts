function twoSum(nums: number[], target: number): number[] {
let current: number = -1;
for (let i = 0; i < nums.length; i++) {
  		 current = nums.indexOf(target - nums[i], i + 1);
       if (current >= 0) return [i, current];
  }

};
