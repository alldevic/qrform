interface Platforms {
    id: number,
    address: string,
    lot: number,
    status: number,
    containersNumbers: number,
    volume: number,
    volumeShipped: number
}

interface Headers {
    text: string,
    value: number,
    sortable: boolean
}

export { Platforms, Headers };
