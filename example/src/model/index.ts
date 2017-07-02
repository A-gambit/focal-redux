import { Atom } from '@grammarly/focal'

export const model = Atom.create({
  repositories: [],
  startSearch: false,
  errorSearch: false,
  searchValue: ''
})

model.subscribe((x: any) => console.log('%cUPDATE ATOM', 'color: #18b70c', x))
