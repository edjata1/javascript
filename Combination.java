class Solution {
    public List<String> letterCombinations(String digits) {
        //list result string bfs
        List<String> result = new ArrayList<String>();
        
        //error check condition
        if(digits == null || digits. length() == 0){
            //output result
            return result;
        }
        
        String[] mapping = {
            "0",
            "1",
            "abc",
            "def",
            "ghi",
            "jkl",
            "mno",
            "pqrs",
            "tuv",
            "wxyz"
        };
        
        letterCombinationsRecursive(result, digits, "", 0, mapping);
        return result;
    }
    
    public void letterCombinationsRecursive(List<String> result, String digits, String current, int index, String[] mapping){
        
        //condition
        if(index == digits.length()){
            result.add(current);
            //output
            return;
        }
        
        String letters = mapping[digits.charAt(index) - '0'];
        
        for(int i = 0; i < letters.length(); i++){
            
            letterCombinationsRecursive(result, digits, current + letters.charAt(i), index + 1, mapping);
        }
    }
}