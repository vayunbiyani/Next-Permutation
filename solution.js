/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {

    var len = nums.length;
    
    const swap = (index1, index2) => {
        var temp = nums[index1]
        nums[index1] = nums[index2]
        nums[index2] = temp;
    }

    const next_bigger_from = (pos) => {
        var current = nums[pos];
        result = -1;
        var min = Infinity;
        for (var i = pos + 1; i < len; i++) {
            if (nums[i] > current) {
                result = i;
                min = nums[i];
            }
        }
        return result;
    }

    const sort_from = (pos) => {
        for (var i = pos; i < len - 1; i++) {
            for (var j = i + 1; j < len; j++) {
                if (nums[i] > nums[j]) {
                    swap(i, j)
                }
            }
        }
    }


    

    if (len < 2) {
        return;
    }

    var pos = len - 2;
    while (pos >= 0) {
        var pos2 = next_bigger_from(pos);
        if (pos2 == -1) {
            pos--
            continue;
        }
        swap(pos, pos2);
        sort_from(pos+1);
        return;
    }
  
    nums = nums.sort((a,b)=>a-b);
    return;
};
