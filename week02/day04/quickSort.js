function quickSort(arr) {
    quickSort(arr, 0, arr.length - 1);
}
function quickSort(arr, left, right){
    if(left >= right){
        return;
    }
    var pivot = arr[Math.floor((left + right)/2)];
    var index = partition(arr, left, right, pivot);
    quickSort(arr, left, index - 1);
    quickSort(arr, index, right);
}

function partition(arr, left, right, pivot){
    while(left <= right){
        while(arr[left] < pivot){
            left++;
        }
        while(arr[right] > pivot){
            right--;
        }
        if(left <= right){
            swap(arr, left, right);
            left++;
            right--;
        }
    }
    return left;
}

function swap(arr, left, right){
    var temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}