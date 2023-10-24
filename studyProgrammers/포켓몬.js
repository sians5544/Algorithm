function solution(nums) {
    let len = nums.length / 2;
    let set = new Set(nums);
    
    return set.size > len? len : set.size;
}