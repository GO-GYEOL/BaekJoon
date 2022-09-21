const [a, b, c] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(i=>+i);
let result;
if(a===b){
    if(b===c){
        // a=b=c
        result = 10000+a*1000;
    }
    else if(b!==c){
        // a=b
        result = 1000+a*100;
    }
} else if(a!==b){
    if(b===c){
        // b=c
        result = 1000+b*100;
    }
    else if(b!==c){
        if(c===a){
            // a=c
            result = 1000+a*100;
        }
        else if(c!==a){
            // 다 다름
            if(a>b){
                if(b>c){
                    result = a*100;
                }
                else if(b<c){
                    if(a>c){
                        result = a*100;
                    }
                    else if(a<c){
                        result = c*100;
                    }
                }
            }
            else if(a<b){
                // 다 다름
                if(b>c){
                    result = b*100;
                } else if(b<c){
                    result = c*100;
                }
            }
        }
    }
}
console.log(result);
