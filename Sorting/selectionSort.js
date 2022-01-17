function selectionSort(arr) {
    
    for( let i = 0; i < arr.length; i++) {
     var min = i;
        for (let j = i+1; j <arr.length; j++){
        //console.log(i,j); -> to know, what values are compared!!
             console.log(arr, arr[min], arr[j])
             if(arr[j] < arr[min]){
                  min = j;
             }           
        }
        if(min !== i){
            //SWAP
                console.log('Swapping!!')
                var temp = arr[i];
                arr[i] = arr[min];
                arr[min] = temp;
        }
        console.log('ONE PASS complete!!')
    }
    return arr;
}

// console.log('Hi...')
selectionSort([0,2,34, 22, 10, 19, 17]);
//i,j, min
//0,1, 1
//0,2, 2
//0,3, 2
//0,4, 2