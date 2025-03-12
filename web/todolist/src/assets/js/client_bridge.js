import json_test from "./json_test"

function mangle() {
    const table = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split('')

    function hash(input) {
        let hash = 5381
        for (let i = input.length - 1; i > -1; i--)
            hash += (hash << 5) + input.charCodeAt(i)
        let value = hash & 0x7FFFFFFF
        let ret = ''

        do { 
            ret += table[value & 0x3D]; 
        }
        while (value >>= 2)

        return ret
    }
    return function (name) {
        let id = hash(name + Math.random() + performance.now())
        return {
            name: `${name}_${id}`,
            id: id
        }
    }
}

const echo =  (() => {
    let fnmap = {};
    let funcObj = {}

     return   function (option) {
        let callback = option.callback;
        if (option.params.length > 0 && option.params[0].id) {
            option.params[0].id = mangle()(option.params[0].id).id;
            funcObj = {};
            funcObj[option.params[0].id] = option.callback;
            callback = function (res) {
                    if (typeof funcObj[res.id] == 'function') {
                        return funcObj[res.id](res);
                    }
            }
        }
        let key = `${option.namespace}@@${option.method}`
        if (!fnmap[key]) {
            let queue = [callback]
            let obj = { queue, last: callback }
            obj.ref = (result, error) => {
                if (queue.length > 0) {
                    queue.shift()(result, error)
                } else {
                    obj.last(result, error)
                }
            }
            fnmap[key] = obj
        } else {
            fnmap[key].queue.push(callback)
            fnmap[key].last = callback
        }

        return {
            ...option,
            callback: fnmap[key].ref
        }
    }
})()

function wrap(call) {
    return (option) => {
        let data = echo(option)
        console.log(data);
        call(data)
    }
}

function test(data) {
    data.callback(data.params)
}

function beidge_request(obj) {
    if ("undefined" == typeof (whio)) {
        return wrap(option => json_test.test(option));
    }
    return whio ? wrap(option => whio.exec(option)) : wrap(option => test(option))
}

function isClient() {
    return !("undefined" == typeof (whio))
}

export default {
    bridge: beidge_request(),
    isClient
}