// 使用本地json文件模拟测试
const json_test_data = {

};

json_test_data.test = function(data) {
    let key = data.method + '_json'
    let value = json_test_data[key]
    if (value !== null && value !== undefined && "id" in value && "params" in data && "id" in data.params[0]){
        value.id = (data.params[0].id);
    }
    data.callback(value)
    return value;
}

export default json_test_data;