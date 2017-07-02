import styled from 'styled-components'

export const Button = styled.button`
  position: relative;
  display: inline-block;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-repeat: repeat-x;
  background-position: -1px -1px;
  background-size: 110% 110%;
  border: 1px solid rgba(27,31,35,0.2);
  border-radius: 0.25em;
  background-image: linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%);
  color: #24292e;
  background-color: #eff3f6;
  width: 20%;
  margin-left: 5%;
  box-sizing: border-box;
  outline: none;

  &:hover {
    background-color: #e6ebf1;
    background-image: linear-gradient(-180deg, #f0f3f6 0%, #e6ebf1 90%);
    background-position: 0 -0.5em;
    border-color: rgba(27,31,35,0.35);
  }
`
