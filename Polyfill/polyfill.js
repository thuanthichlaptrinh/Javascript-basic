if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
        "use strich";

        if (search instanceof RegExp) {
            throw TypeError("First argument must not be a RegExp");
        }
        if (start == undefined) {
            start = 0;
        }
        return this.indexOf(search, start) !== -1;
    };
}
