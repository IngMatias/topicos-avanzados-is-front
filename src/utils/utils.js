export const getDataFromForm = (form) => {
  const data = {}
  for (const [key, value] of new FormData(form)) {
    data[key] = value
  }
  return data
}

export const getUrlParamsFromObj = (obj) => {
  const paramsList = []
  for (const [key, value] of Object.entries(obj)) {
    if (value){
      paramsList.push(`${key}=${value}`)
    }
  }
  const paramsStr = '?' + paramsList.join('&')
  return paramsList.length > 0 ? paramsStr : ''
}