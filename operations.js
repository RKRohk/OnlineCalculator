function operations(arg1, arg2, operation){
    switch(operation){
        case '+': return parseFloat(arg1 + arg2).toFixed(2);
        case '-': return parseFloat(arg1 - arg2).toFixed(2);
        case 'x': return parseFloat(arg1 * arg2).toFixed(2);
        case '/': return parseFloat(parseFloat(arg1) / parseFloat(arg2)).toFixed(2);
        default:
            return arg1;
    }
}