class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sMap = {};


        for(let a of s)
        {
            sMap[a] = (sMap[a] || 0) + 1;
        }

        for(let b of t)
        {
            if(sMap[b])
            {
                sMap[b]--;
            }
            else{
                return false;
            }
        }

        return Object.values(sMap).every(v => v == 0);
    }
}
