// Enum to avoid magic strings and provide intellisense
enum DeviceType {
    Desktop,
    Mobile
}

// The abstract "product"
interface Table {

    render(): void;

    onRowClick(): void;

}

// A concrete "product"
class DesktopTable implements Table {

    public onRowClick(): void {
    }

    public render(): void {
        console.log('Rendered desktop table');
    }

}

// A concrete "product"
class MobileTable implements Table {

    public onRowClick(): void {
    }

    public render(): void {
        console.log('Rendered mobile table');
    }

}

// The "creator"
class TableFactory {

    public static createTable(deviceType: DeviceType): Table {

        if (deviceType == DeviceType.Desktop) {
            return new DesktopTable();
        }

        if (deviceType == DeviceType.Mobile) {
            return new MobileTable();
        }

        throw new Error('Device type not found');
    };

}

// Client code (the consumer)
class Application {

    private desktopTable: Table;
    private mobileTable: Table;

    onStartup(): void {

        this.desktopTable = TableFactory.createTable(DeviceType.Desktop);
        this.mobileTable = TableFactory.createTable(DeviceType.Mobile);

        this.desktopTable.render();
        this.mobileTable.render();
    }
}
