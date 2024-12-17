export function formatObjectForParams (params: {[key: string]: any}) {
    return  Object.entries(params).map(([key, value]) => [key, String(value)])
}