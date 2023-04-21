export type UType = {
    asset: string,
    index: string,
}

export type RackType = {
    name: string,
}

export type RoomType = {
    name: string,
    grid: RackType[][],
}