process.stdin.resume();
process.stdin.setEncoding('utf8');
// Your code here!

let a=1;
function Sleep( milli_second )
{
    var start = new Date();
    while( new Date() - start < milli_second );
}

for(let i=1;i>0;i++){
    console.log(33*a+'-'+4*a);
    Sleep(100);
    a++;
}
