/**
 * @DataCenterOrganizer:DataCenters
*/
export type RackType = {
    key: string;
    name: string;
    assets: string[];
}

export type RoomType = {
    key: string;
    name: string;
    racks: RackType[];
}


export const TestData: RoomType[] = [
  {
    key: '0',
    name: 'Data Center 01',
    racks: [
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
    ]
  },
  {
    key: '1',
    name: 'Data Center 02',
    racks: [
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
    ]
  }
]