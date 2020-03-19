module.exports = class DepthCalculator {
    calculateDepth(arr, item = 1, depthArr = []) { 
        depthArr.push(item);

        for (let i of arr) {
           if (Array.isArray(i)) {
              this.calculateDepth(i, item + 1, depthArr);
           } 
        } 

        return Math.max(...depthArr);
    
        }
};