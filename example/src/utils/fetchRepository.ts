export const fetchRepository =(searchValue: string) => fetch(
    `https://api.github.com/search/repositories?q=${searchValue}`
  ).then(res =>
    res
      .json()
      .then(json => (res.status === 200 ? Promise.resolve(json) : Promise.reject(json.message)))
  )