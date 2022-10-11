const [tc, ...arr] = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

for(i=0; i<arr.length; i++){
    const [num, string] = arr[i].split(' ')
    let stringArr = [];
    for(j=0; j<string.length; j++){
        stringArr.push(string[j].repeat(num));
    }
    const newArr = stringArr.join('');
    console.log(newArr);
}
                                                                                     