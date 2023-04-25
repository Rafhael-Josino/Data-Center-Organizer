// Rooms

export type RoomType = {
    key: string;
    name: string;
}

export const Rooms = [
    { key: '0', name: 'Data Center #1'},
    { key: '1', name: 'Data Center #2'},
];

// Racks

export type RackType = {
    key: string;
    name: string;
    assets: string[];
}

export const Racks = [
    [
        { 
            key: '0',
            name: 'Rack 01',
            assets: ['SW 1', '-', '-', '-'],
        },
        { 
            key: '1',
            name: 'Rack 02',
            assets: ['SW 1', 'SW 2', '-', '-'],
        },
        { 
            key: '2',
            name: 'Rack 03',
            assets: ['SW 1', 'SW 2', '-', 'SW 4'],
        },
    ],
    [
        { 
            key: '0',
            name: 'Rack 01',
            assets: ['-', '-', 'Router 3', 'Router 3']
        },
        { 
            key: '1',
            name: 'Rack 02',
            assets: ['-', '-', 'Router 3', 'Router 3']
        },
    ],
];