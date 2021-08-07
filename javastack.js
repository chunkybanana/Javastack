let elements = require('./elements')
function run(code,inputs=[]){
    function lex(text){
        let tokens = [], string = false, string_so_far = '', whitespace = ' \n\t';
        for(let char of text){
            if(whitespace.includes(char) && !string){
                if(!string_so_far) continue
                tokens.push(string_so_far);
                string_so_far = '';
            } else if(char == '"'){
                if(string) tokens.push(`"${string_so_far}"`), string_so_far = ''
                if(string = !string) string_so_far = '';
            } else string_so_far += char
        }
        if(string_so_far) tokens.push(string_so_far);
        return tokens
    }
    function parse(list){
        let nestedstack = [], tokens = [];
        for(let token of list){
            if(token[0] == '"'){
                tokens.push(['string',token])
            } else if(token.match(/[\d\.]+/)){
                tokens.push(['number',token]);
            } else if(['times','foreach','while','map','if','forever','until','unless','twice','thrice','whilechange','four','five'].includes(token)){
                tokens.push([token,'']);
                nestedstack.push(token);
            } else if(token == 'else'){
                if(nestedstack.pop() == 'if'){
                    nestedstack.push('else')
                    tokens.push(['else',''])
                } else throw new SyntaxError('Syntax Error: else not in if')
            } else if(token == 'end') {
                let popped = nestedstack.pop()
                if(typeof popped === 'undefined') throw new SyntaxError('Syntax Error: Unmatched end')
                tokens.push(['end_'+popped,''])
            } else {
                tokens.push(['element',token])
            }
        }
        tokens.push(...nestedstack.map(z=>['end_'+z,'']).reverse())
        return tokens
    }
    function genCursedError(){
        let rand = x => x[~~(Math.random() * x.length)], h, q, v;
        return `${rand(['Syntax','Reference','Type','Internal','You','Java','Error','Meta','Not An ','Interpreter','Random','Range','Muffin','Potential','Invisible','Bad'])}Error on line ${~~(Math.random() * 100)}:`+'\n'+
        `${[...Array(z = ~~(Math.random() * 50 +  30))].map(x=>String.fromCharCode(~~(Math.random() * 95 + 32))).join``}`+'\n'+
        `${' '.repeat(~~(Math.random() * z))}^`+'\n'+
        `${rand([
	        `${rand(['This','Commas','Life','Screwdrivers','Water','Semicolons','You'])} cannot be used to ${rand(q=['eat','yeet','dissolve','use','remove','convert'])} ${rand(v=['potatoes','semicolons','you','peanuts','coffee','the digestive system'])}`,
            `Please don't ${rand(q)} ${rand(v)} - it causes ${rand(['cursed error messages like this one','bad puns','deconfrickulation of apioforms','Vitamin C','5th of July fireworks'])}.`,
            `Why did you do it? It's ruined I tell you, ruined!`,
            `Golfing tip: Use '${rand(h=['thrice','four','dynamite','add','concat','lyxal','rearrange','permutations'])}' instead of '${rand(h)}'.`,
            `The problem isn't with the code. It's with you.`,
        ])}`
    }
    function last(arr){
        return arr[arr.length-1]
    }
    function pop(stack,num=1,wrap = false){
        function popRecurse(stack,num){
            if(!num) return []
            if(stack.length === 0){
                last(inputstack).unshift(last(inputstack).pop());
                return [last(inputstack)[0],...popRecurse(stack,num - 1,0)]
            } else {
                return [stack.pop(),...popRecurse(stack,num - 1)]
            }
        }
        var res = popRecurse(stack,num);
        if(res.length === 1 && !wrap) return res[0]
        return res
    }
    function compile(tokens) {
        let compiled = '';
        let genSecret = x => 'v'+Math.random().toString(16).slice(2);
        let for_loop = (times, secret) => `for(${secret} = 0; ${secret} < ${times}; ${secret}++){\ncontext_variable = ${secret}\n`
        for(token of tokens){
            let secret = genSecret(), secret2 = genSecret();
            if(token[0] == 'twice') compiled += for_loop(2,secret);
            if(token[0] == 'thrice') compiled += for_loop(3,secret);
            if(token[0] == 'four') compiled += for_loop(4,secret);
            if(token[0] == 'five') compiled += for_loop(5,secret);
            if(token[0] == 'times') compiled += `for(${secret} = 0,${secret2} = pop(stack); ${secret} < ${secret2}; ${secret}++){\n context_variable = ${secret};\n`;
            if(token[0] == 'foreach') compiled += `for(context_variable of pop(stack)){`
            if(token[0] == 'forever') compiled += 'for(;;){'
            if(['twice','thrice','if','else','four','five','times','while','forever','foreach'].includes(token[0].slice(4))) compiled += '}\n';
            if(token[0] == 'if') compiled += 'if(pop(stack)){\n';
            if(token[0] == 'else') compiled += '} else {\n'
            if(token[0] == 'while') compiled += 'while(pop(stack)){\n'
            if(token[0] == 'number') compiled += `stack.push(${token[1]})\n`;
            if(token[0] == 'string') compiled += `stack.push(${token[1]})\n`;
            if(token[0] == 'map') compiled += 'stack.push([...pop(stack)].map(x=>{\nvar stack = [];\ninputstack.push([x]);\n';
            if(token[0] == 'end_map')  compiled += 'let result = pop(stack);\ninputstack.pop();\nreturn result;\n}))\n';
            
            if(token[0] == 'element'){
                if(token[1] == 'context'){
                    compiled += `stack.push(context_variable);\n`
                } else {
                    compiled += `stack.push(${elements[token[1]][2]?'...':''}elements.${token[1]}[0](...pop(stack,${elements[token[1]][1]}, true)))\n`;
                }
            }
        }
        return compiled;
    }
    let stack = [], inputstack = [inputs], printed = false; 
    elements.eval = [a=>eval(compile(parse(lex(a)))),1]; 
    elements.wrap = [()=>stack,0];
    elements.print = [(a)=>(console.log(a),printed = true,[]),1,1];
    elements.flatprint = [a=>(process.stdout.write(String(a)),printed = true, []),1,1]
    eval(compile(parse(lex(code))));
    if(!printed)console.log(pop(stack))
    //console.log(compile(parse(lex(code))))
}

run('',[])