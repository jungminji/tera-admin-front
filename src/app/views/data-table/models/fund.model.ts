export interface FundModel {
    id: string,
    order: number,
    status: number
    name: string,
    target: number,
    participant: number,
    date: {
        begin: string,
        end: string
    }
}