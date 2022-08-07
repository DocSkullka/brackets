module.exports = function check(str, bracketsConfig) {

    let openArr = [];
    let objPair = {};
    for (let i = 0; i < bracketsConfig.length; i++) {
        objPair[bracketsConfig[i][1]] = bracketsConfig[i][0];
        openArr.push(...bracketsConfig[i][0]);
    }
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        let currentSymbol = str[i];
        let checkUnequal = ((openArr.includes(currentSymbol)) && (objPair[currentSymbol] !== currentSymbol));
        let checkEqual = ((openArr.includes(currentSymbol)) && (stack[stack.length - 1] !== currentSymbol) && (objPair[currentSymbol] === currentSymbol));
        if (checkUnequal || checkEqual) {
            stack.push(currentSymbol);
        } else {
            if (stack.length === 0) {
                return false;
            }
            let topElement = stack[stack.length - 1];
            if (objPair[currentSymbol] === topElement) {
                stack.pop()
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
}
