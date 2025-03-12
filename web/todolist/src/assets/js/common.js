import bridge from "./client_bridge"

const common_item = {

};

common_item.LogFile = function(info) {
    let param = {
        info: info,
    }

    bridge.bridge({
        namespace: "TodoList",
        method: "Log",
        params: [param],
        callback: function (res) {
            if (!res || (res.ErrorInfo && res.ErrorInfo.length <= 0)) {
                console.error("Log Fail: ", info)
            }
        },
    });
}

export default common_item;