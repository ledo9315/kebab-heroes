import { Product } from "@prisma/client"
import { axiosInstance } from "./axios-instance"
import { ApiRoutes } from "./constants"

export const search = async (query: string): Promise<Product[]> => {
    const { data } = await axiosInstance.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, { params: { query } })

    return data
}



// Durch Destructuring holt die Codezeile direkt data heraus:

// {
//     "data": [
//       { "id": "1", "name": "iPhone 15", "price": 999.99 },
//       { "id": "2", "name": "iPhone 14", "price": 899.99 }
//     ],
//     "status": 200,
//     "statusText": "OK",
//     "headers": { ... },
//     "config": { ... },
//     "request": { ... }
// }