function twosum(arr,target){
    for(i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]==target){
                return [i,j]
            }
        }
    }

}
console.log(twosum([1,2,3,4,5],6))