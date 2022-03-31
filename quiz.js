function reverseArr(arr) {

    console.log("Input:", arr);
    
    // arr.reverse();
    
    // console.log("Output:", arr);

    for(let i = 0; i < arr.length/2; i++){
        let firstVar = arr[i];
        
        arr[i] = arr[arr.length-i-1]
        arr[arr.length-i-1] = firstVar

        console.log("Output:", arr);
    }
}


arr = ["1","2","3","4"];
reverseArr(arr);