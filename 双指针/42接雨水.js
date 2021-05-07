// /**
//  * @param {number[]} height
//  * @return {number}
//  */
// var trap = function (height) {
//     // 反向求和，将升序的值 - 目标体积所占
//     for (let i = 0; i < height.length; i++) {
//         const ele = height[i];
        
//     }
// };


// var reinitializePermutation = function (n) {
//     let prem = [],
//         arr = [];
//     for (let i = 0; i < n; i++) {
//         prem.push(i);
//         if (i % 2 == 0) {
//             arr[i] = (i / 2);
//         } else if (i % 2 == 1) {
//             arr[i] = (n / 2) + ((i - 1) / 2) ;
//         }
//     }
//     let flag = 1, _oriNum = 1, _num = 1;
//     while (flag == 1 || _num != _oriNum) {
//         _num = prem.indexOf(arr.indexOf(_num));
//         flag++;
//     }
//     console.log('flag', flag-1)
// };

// console.log('reinitializePermutation', reinitializePermutation(6))


// 给你一个正整数 primeFactors。 你需要构造一个正整数 n， 它满足以下条件：

// n 质因数（ 质因数需要考虑重复的情况） 的数目 不超过 primeFactors 个。
// n 好因子的数目最大化。 如果 n 的一个因子可以被 n 的每一个质因数整除， 我们称这个因子是 好因子。 比方说， 如果 n = 12， 那么它的质因数为[2, 2, 3]， 那么 6 和 12 是好因子， 但 3 和 4 不是。
// 请你返回 n 的好因子的数目。 由于答案可能会很大， 请返回答案对 109 + 7 取余 的结果。

// 请注意， 一个质数的定义是大于 1， 且不能被分解为两个小于该数的自然数相乘。 一个数 n 的质因子是将 n 分解为若干个质因子， 且它们的乘积为 n。



// 示例 1：

// 输入： primeFactors = 5
// 输出： 6
// 解释： 200 是一个可行的 n。
// 它有 5 个质因子：[2, 2, 2, 5, 5]， 且有 6 个好因子：[10, 20, 40, 50, 100, 200]。
// 不存在别的 n 有至多 5 个质因子， 且同时有更多的好因子。
// 示例 2：

// 输入： primeFactors = 8
// 输出： 18
/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
// var evaluate = function (s, knowledge) {
//     let arr = s.match(/\([a-z]+\)/gi);
//     if (!arr) {
//         return s;
//     }
//     let obj = {};
//     for (let i = 0; i < knowledge.length; i++) {
//         obj[knowledge[i][0]] = knowledge[i][1];
//         // let regx = new RegExp(`\\(${knowledge[i][0]}\\)`, 'gi');
//         // s = s.replace(regx, knowledge[i][1]);
//     }
//     arr.map(e => {
//         let str = e.substr(1, e.length - 2);
//         if (obj[str]) {
//             s = s.replace(e, obj[str])
//         } else {
//             s = s.replace(e, '?')
//         }
//     })
//     return s;
// };


/**
 * 一个句子是由一些单词与它们之间的单个空格组成， 且句子的开头和结尾没有多余空格。 比方说， "Hello World"，
 "HELLO"，
 "hello world hello world"
 都是句子。 每个单词都 只 包含大写和小写英文字母。

 如果两个句子 sentence1 和 sentence2， 可以通过往其中一个句子插入一个任意的句子（ 可以是空句子） 而得到另一个句子， 那么我们称这两个句子是 相似的。 比方说， sentence1 = "Hello my name is Jane"
 且 sentence2 = "Hello Jane"，
 我们可以往 sentence2 中 "Hello"
 和 "Jane"
 之间插入 "my name is"
 得到 sentence1。

 给你两个句子 sentence1 和 sentence2， 如果 sentence1 和 sentence2 是相似的， 请你返回 true， 否则返回 false。
 * @param {
   示例 1：

   输入： sentence1 = "My name is Haley", sentence2 = "My Haley"
   输出： true
   解释： 可以往 sentence2 中 "My"
   和 "Haley"
   之间插入 "name is"，
   得到 sentence1。
   示例 2：

   输入： sentence1 = "of", sentence2 = "A lot of words"
   输出： false
   解释： 没法往这两个句子中的一个句子只插入一个句子就得到另一个句子。
   示例 3：

   输入： sentence1 = "Eating right now", sentence2 = "Eating"
   输出： true
   解释： 可以往 sentence2 的结尾插入 "right now"
   得到 sentence1。
   示例 4：

   输入： sentence1 = "Luky", sentence2 = "Lucccky"
   输出： false
} sentence1 
 * @param {*} sentence2 
 */
var areSentencesSimilar = function (sentence1, sentence2) {
    let minLenNums, maxLenNums;
    if (sentence1.length > sentence2.length) {
        minLenNums = sentence2.split(' ');
        maxLenNums = sentence1.split(' ');
    } else {
        minLenNums = sentence1.split(' ');
        maxLenNums = sentence2.split(' ');
    }

    /**
     * 1. 短的只有一个：短的位于长的开始或结尾
     * 2. 短的第一个字符如果不是在长的第0个，那么后面都需要相同
     * 3. 短和长前几位都相同，则遇到第一个不同时，
     */
    let maxIndex = 0, diff = 0, same = 0;
    for (let i = 0; i < minLenNums.length; i++) {
      if (i == 0 && minLenNums[i] !== maxLenNums[maxIndex]) {
        diff++;
      } else if () {
        
        // return maxLenNums.slice(_index + 1).join(' ') == minLenNums.slice(i + 1).join(' ');
      }
    }
    return true;
};

console.log('areSentencesSimilar', areSentencesSimilar("d T d ED uXW L U J n klIe", "d T d ED uXW L U J klIe"))

"eTUny i b R UFKQJ EZx JBJ Q xXz"
"eTUny i R EZx JBJ xXz"

"d T d ED uXW L U J n klIe"
"d T d ED uXW L U J klIe"
