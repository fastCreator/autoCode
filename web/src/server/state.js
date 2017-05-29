export const getState = () => {
    // var routers = localStorage.routers;
    // if(routers){
    //     return parse(JSON.parse(localStorage.routers))
    // }
    return '';
}

export const setState = (val) => {
    var value = clone(val); 
    localStorage.routers = JSON.stringify(value);
}

function clone(obj) {
    var o;
    if (typeof obj == "object") {
        if (obj === null) {
            o = null;
        } else {
            if (obj instanceof Array) {
                o = [];
                for (var i = 0, len = obj.length; i < len; i++) {
                    if(obj[i])
                    o.push(clone(obj[i]));
                }
            } else {
                o = {};
                for (var j in obj) {
                    if (j !== 'parent') {
                        o[j] = clone(obj[j]);
                    }
                }
            }
        }
    } else {
        o = obj;
    }
    return o;
}



function parse(obj, parent) {
    for (var key in obj.children) {  
            parse(obj.children[key], obj);
    }  
    obj.parent = parent;
    return obj;
}