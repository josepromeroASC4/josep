function swap(array, firstIndex, secondIndex){

var temp = array[firstIndex];

array[firstIndex] = array[secondIndex]
array[secondIndex] = temp;

}


function bubbleSort(array){
var maxLength = array.length;
for(var i = maxLength -1; i>=0; i--){
    for(var j= maxLength - i;j>=0;j--){
        if(array[j] < array[j-1]){
            swap(array, j, j-1);
        }
    }

}
return array;
}

var myArray = ['Air Jordan 11 Concord', 'Bape adidas NMD', 'Cowboy Boots', 'Dunking Shoes', 'England Shoes', 'Fire Red 5s', 'Gel-Lyte', 'H&M Shoes', 'Infrared 6', "Jordan 12s", "K-Mart Shoes", "Laney 5s"];
var myFunc = function (letter) {
    for (var i = 0; i < letter.length; i += 1) {
        // Use the index i here
        console.log(letter[i].charAt(0));
    }
}

// Call your function, passing in the array you defined:
myFunc(myArray);


var prices = tyshawnSneakers.map(function (x){
return x["priceUSD"];
})

console.log(prices);

console.log(bubbleSort(prices));