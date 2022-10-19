import mockData from "./mock-data.json"

export type Address = {
  city: string
  state: string
  street: string
  zipCode: string
}

export interface UnitTableRow {
  minIncomeMaximum: number
  minIncomeMinimum: number
  rentMaximum: number
  rentMinimum: number
  rentUnit: "percentage" | "currency"
  type: "studio" | "oneBdrm" | "twoBdrm" | "threeBdrm" | "fourBdrm"
}

export interface Listing {
  address: Address
  deadline: string
  id: string
  imageLabels: string[]
  imageURL: string
  listingLabels: string[]
  name: string
  tableHeader: string | null
  tableSubheader: string | null
  unitTableData: UnitTableRow[]
}

export const Listings = () => {
  const listingData = mockData as Listing[]
  // Please use this component as the root of your solution
  return null
}
