function reverseString(str) {
    let reversedStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i]
    }

    return reversedStr;
}

console.log(reverseString('privet'))

// nums = [1,4,8,5,2]
function mean(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    return sum/nums.length;
}
console.log(mean([1,4,8,5,2]))

