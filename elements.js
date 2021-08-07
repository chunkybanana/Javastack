module.exports = {
    'add':[(a,b) =>a + b,2],
    'and':[(a,b)=>a&&b,2],
    'append':[(a,b)=>[...b,a],2],
    'bitand':[(a,b)=>a&b,2],
    'bitnot':[(a)=>~a,1],
    'bitor':[(a,b)=>a|b,2],
    'ceil':[Math.ceil,1],
    'char':[String.fromCharCode,1],
    'charcode':[a=>a.charCodeAt(),1],
    'divide':[(a,b)=>b/a,2],
    'divmod':[(a,b)=>[~~(b/a),b%a],2],
    'double':[a=>a+a,1],
    'duplicate': [(a)=>[a,a],1,1],
    'equal':[(a,b)=>a==b,2],
    'floor':[a=>a-a%1,1],
    'floordiv':[(a,b)=>~~(b/a),2],
    'half':[a=>a/2,1],
    'increment':[(a)=>a+1,1],
    'index': [(a,b)=>b[a],2],
    'iterate':[(a) => [...a],1,1],
    'join':[(a,b)=>b.join(a),2],
    'length':[a=>a.length, 1],
    'maybe': [() => Math.random() < 0.5,0],
    'mod':[(a,b)=>b%a,2],
    'multiply':[(a,b)=> a * b, 2],
    'not':[(a)=>!a,1],
    'or':[(a,b)=>a||b,2],
    'pair':[(a,b)=>[b,a],2],
    'pop':[(a)=>[],1,1],
    'power':[(a,b)=>b**a, 2],
    'prepend':[(a,b)=>[a,...b],2],
    'print':[a=>console.log(a)||[],1,1],
    'quadruple':[a=>a+a+a+a,1],
    'quarter':[a=>a/4,1],
    'randfloat':[Math.random,0],
    'randint':[a=>~~(Math.random() * a),1],
    'randminmax':[(a,b)=>(Math.random() * Math.abs(a-b) + (b>a?a:b)),2],
    'random':[a=>a[~~(Math.random * a.length)],1],
    'range':[(a) => [...Array(a).keys()],1],
    'repeat':[(a,b) => b.repeat(a), 2],
    'replace':[(a,b,c) => c.replaceAll(b,a),3],
    'split':[(a,b)=>b.split(a),2],
    'square':[(a)=>a*a,1],
    'sum':[a=>a.reduce((x,y)=>x+y),1],
    'swap': [(a,b) => [a,b],2,1],
    'third':[a=>a/3,1],
    'triple':[a=>a+a+a,1],
    'ascii':[()=>[...Array(95)].map((_,x)=>String.fromCharCode(x+32)).join``,0],
    'alphabet':[()=>'abcdefghijklmnopqrstuvwxyz',0],
    'quote':[()=>'"',0]
}