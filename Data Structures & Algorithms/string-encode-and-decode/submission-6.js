class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map(str => `${str.length}#${str}`).join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let newArr = [];
        for(let i = 0; i< str.length;){
           let j = i;
           while(str[j] !== '#'){
            j++;
           }
           let len = parseInt(str.slice(i,j));
           let news = str.slice(j+1, j+1+len);
           newArr.push(news);
           i = j+1+len;
        }
        return newArr;
    }
}
