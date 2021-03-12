// 第一题
var arr = [1, 2, 3, 4, 4, 3, 3, 1, 5, 3]
function a(arr, item) {
    if (arr.indexOf(item) == -1) {
        throw new Error('没有')
    }
    return arr.indexOf(item)
}

// 第二题
var arr = [1, 2, 3, 4, 4, 3, 3, 1, 5, 3];
var newArr = [];
for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            newArr.push(arr[i])
        }
    }
}
// console.log([...new Set(newArr)])
// 第三题
function formatDate(date, fmt) {
    var data = new Date(date);
    if (isNaN(data.getDate())) return date;
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(

        )
    }
}

// 第四题
var str = 'font-size';
var reg = /-(\w)/g;
var newStr = str.replace(reg, function ($, $1) {
    return $1.toUpperCase()
})

// 第五题
var str = "http://www.baidu.com?key1=1&key2=2&key3=3&test=4#hehe";
var query = str.split("?")[1].split('&');
var queryArr = [];
for (var i = 0; i < query.length; i++) {
    queryArr.push(query[i].split("=")[1])
}

// 第六题
var str = 'dsgjasg2114';
function hasNum(str) {
    var strArr = str.split('');
    console.log(strArr);
    return strArr.some((item) => {
        return !isNaN(+item)
    })
}
console.log(hasNum(str))

// 第7题

var arr = [1, 2, 3, 4, 4, 3, 3, 1, 5, 3];
var sum = arr.reduce((a, b) => {
    return a + b;
}, 0)

// console.log(sum)

// 第8题
var arr1 = [{ name: 'Lily', age: 18}, { name: 'Lucy', age: 17 }];
var arr2 = [{ name: 'Lily', age: 22}, { name: 'Lvy', age: 24 }];

for(var i =0;i<arr1.length; i++){
    var newArr = arr2.filter((item)=>{
        return item.name == arr1[i].name
    })
    // console.log(newArr.map(item=>item.name))
}
// 第 9 题


