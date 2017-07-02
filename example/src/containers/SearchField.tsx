import * as React from 'react'
import { connect } from 'react-redux'
import { lift, bind } from '@grammarly/focal'
import { model } from '../model'
import { fetchSerachRepos } from '../actions'
import { Field } from '../components/Field'
import { Button } from '../components/Button'
import { Wrapper } from '../components/Wrapper'

interface SearchFieldContainerProps {
  onClick?: (search: string) => void
}

const LiftField = lift(Field)

const SearchFieldContainer = ({ onClick }: SearchFieldContainerProps) => {
  const searchValue = model.lens(x => x.searchValue)
  return (
    <Wrapper>
      <LiftField {...bind({ value: searchValue })} placeholder="Search Github" />
      <Button onClick={() => onClick && onClick(searchValue.get())}>Search</Button>
    </Wrapper>
  )
}

const mapDispatchToProps = (dispatch: any) => ({
  onClick: (searchValue: string) => dispatch(fetchSerachRepos(searchValue))
})

export const SearchField = connect(null, mapDispatchToProps)(SearchFieldContainer)
