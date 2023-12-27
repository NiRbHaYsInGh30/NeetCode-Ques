//First Sort the array
//AFter that itreate and check if any duplicate is present or not
//If yes return true else false
 public boolean containsDuplicate(int[] nums) {
        Arrays.sort(nums);
      for(int i=0;i<nums.length-1;i++){
          if(nums[i]==nums[i+1]){
              return true;
          }
      }  

    return false;
    }