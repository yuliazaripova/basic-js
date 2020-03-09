module.exports = function repeater(str, options) {
    options.separator = options.separator !== undefined ? options.separator : '+';
    options.additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|';
    let addStr;
    if (options.additionRepeatTimes === undefined || options.addition === undefined) {
        addStr = '';
    } else {
        addStr = Array(options.additionRepeatTimes).fill(options.addition+'').join(options.additionSeparator+'');
    }
    if (options.repeatTimes === undefined) {return str+options.addition;}
    let strAddStr = str+addStr;
    return Array(options.repeatTimes).fill(strAddStr).join(options.separator+'');
};
  