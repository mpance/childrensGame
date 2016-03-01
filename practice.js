var text = "Take thh";


function countLetters(str) {
    return str.split('').reduce(function(acc, ele, a, b){
        console.log(acc, ele, a)
        acc[ele] = (acc[ele] || 0) + 1;
        return acc;
    }, {});
}

var wordObjs = [];

for(var key in dict) {

    console.log(dict[word])

    var wordObj = {
        word: key,
        quantity: dict[key]
    };

    wordObjs.push(wordObj);

}

wordObjs.sort(function(a, b) {
    return a.quantity - b.quantity;
});

console.log(sortWords(text));

function digitSum(numStr) {

    while(numStr.length > 1) {
        var sum = numStr.split('').reduce(function(acc, char) {
        return acc + parseInt(char);
    }, 0);

    numStr = sum + '';
}