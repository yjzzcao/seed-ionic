angular.module('starter.services', [])

.factory('$localstorage', ['$window',
  function($window) {
    return {
      set: function(key, value) {
        $window.localStorage[key] = value;
      },
      get: function(key, defaultValue) {
        return $window.localStorage[key] || defaultValue;
      },
      setObject: function(key, value, timeout) {
        var res = new RegExp("^\\+?[1-9][0-9]*$");
        if (!res.test(timeout)) timeout = null;
        if (timeout != null) {
          nowTimeStamp = new Date().getTime();
        };
        var storageValue = {
          value: value,
          timeout: timeout,
          timeStamp: nowTimeStamp
        };
        $window.localStorage[key] = JSON.stringify(storageValue);
      },
      getObject: function(key) {
        var storageValue = $window.localStorage[key];
        if (this.isVariableBlank(storageValue)) return null;
        storageValue = JSON.parse(storageValue);
        if (this.isVariableBlank(storageValue.timeout) || storageValue.timeout <= 0) return storageValue.value;
        var nowTimeStamp = new Date().getTime();
        var storeTimeStamp = storageValue.timeStamp;
        var timeout = storageValue.timeout;
        if ((nowTimeStamp - storeTimeStamp) < timeout) return storageValue.value;
        localStorage.removeItem(key);
        return null;
      },
      remove: function(key) {
        localStorage.removeItem(key);
      }
    }
  }
]);