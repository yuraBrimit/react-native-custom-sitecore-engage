var appStore;

function initAppStore(settedAppStore)  {
    return   appStore = settedAppStore;
}

function getAppStore() {
    return appStore
}

exports.initAppStore = initAppStore;
exports.getAppStore = getAppStore;
