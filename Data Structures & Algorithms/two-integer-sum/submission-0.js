class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let map  = {};
        for(let i =0;i<nums.length;i++)
        {
            const toFind = target - nums[i];
            if(map[toFind] != undefined)
            {
                return [map[toFind], i];
            }
            else{
                map[nums[i]] = i;
            }
        }
    }
}
