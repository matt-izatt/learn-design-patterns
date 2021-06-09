// Enum to avoid magic strings and provide intellisense
var DeviceType;
(function (DeviceType) {
    DeviceType[DeviceType["Desktop"] = 0] = "Desktop";
    DeviceType[DeviceType["Mobile"] = 1] = "Mobile";
})(DeviceType || (DeviceType = {}));
// A concrete "product"
var DesktopTable = /** @class */ (function () {
    function DesktopTable() {
    }
    DesktopTable.prototype.onRowClick = function () {
    };
    DesktopTable.prototype.render = function () {
        console.log('Rendered desktop table');
    };
    return DesktopTable;
}());
// A concrete "product"
var MobileTable = /** @class */ (function () {
    function MobileTable() {
    }
    MobileTable.prototype.onRowClick = function () {
    };
    MobileTable.prototype.render = function () {
        console.log('Rendered mobile table');
    };
    return MobileTable;
}());
// The "creator"
var TableFactory = /** @class */ (function () {
    function TableFactory() {
    }
    TableFactory.createTable = function (deviceType) {
        if (deviceType == DeviceType.Desktop) {
            return new DesktopTable();
        }
        if (deviceType == DeviceType.Mobile) {
            return new MobileTable();
        }
        throw new Error('Device type not found');
    };
    ;
    return TableFactory;
}());
// Client code (the consumer)
var Application = /** @class */ (function () {
    function Application() {
    }
    Application.prototype.onStartup = function () {
        this.desktopTable = TableFactory.createTable(DeviceType.Desktop);
        this.mobileTable = TableFactory.createTable(DeviceType.Mobile);
        this.desktopTable.render();
        this.mobileTable.render();
    };
    return Application;
}());
