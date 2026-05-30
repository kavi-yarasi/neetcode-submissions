class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

    
    if(s.length != t.length) return false;
    let alphabets = new Array(26).fill(0);

    for(let a of s)
    {
        const idx = a.charCodeAt(0) - 97;
        alphabets[idx]++;
    }
    for(let b of t)
    {
        const idx = b.charCodeAt(0) - 97;
        alphabets[idx]--;

        if(alphabets[idx]<0)
        {
            return false;
        }
        
    }
    return true;
        
}
}