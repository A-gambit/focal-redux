import * as React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  padding-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #eee;
`

const Name = styled.a`
  color: #0366d6;
  text-decoration: none;
  font-size: 20px;
  display: block;
  margin-bottom: 5px;

  &:hover {
    text-decoration: underline;
  }
`

const Discription = styled.span`
  margin-bottom: 8px;
  color: #586069;
  width: 100%;
  display: block;
`

const Language = styled.span`
  display: inline-block;
`

const LanguageCircle = styled.span`
  position: relative;
  top: 1px;
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props: { color: string }) => props.color};
  margin-right: 4px;
`

const Icon = styled.a`
  display: inline-block;
  margin-left: 16px;
  text-decoration: none;
  color: rgb(88, 96, 105);

  &:hover {
    color: #0366d6;
  }
`

Icon.defaultProps = {
  target: '_blank'
}

const LableWrapper = styled.div`
  font-size: 12px;
  color: rgb(88, 96, 105);

  svg {
    display: inline-block;
    vertical-align: text-bottom;
    margin-right: 5px;
    fill: currentColor;
  }
`

const Star = () =>
  <svg aria-label="stars" height="16" version="1.1" viewBox="0 0 14 16" width="14">
    <path
      fillRule="evenodd"
      d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"
    />
  </svg>

const Fork = () =>
  <svg aria-label="forks" height="16" version="1.1" viewBox="0 0 10 16" width="10">
    <path
      fillRule="evenodd"
      d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
    />
  </svg>

const colors = {
  Mercury: '#ff2b2b',
  TypeScript: '#2b7489',
  PureBasic: '#5a6986',
  'Objective-C++': '#6866fb',
  Self: '#0579aa',
  edn: '#db5855',
  NewLisp: '#87AED7',
  'Jupyter Notebook': '#DA5B0B',
  Rebol: '#358a5b',
  Frege: '#00cafe',
  Dart: '#00B4AB',
  AspectJ: '#a957b0',
  Shell: '#89e051',
  'Web Ontology Language': '#9cc9dd',
  xBase: '#403a40',
  Eiffel: '#946d57',
  Nix: '#7e7eff',
  RAML: '#77d9fb',
  MTML: '#b7e1f4',
  Racket: '#22228f',
  Elixir: '#6e4a7e',
  SAS: '#B34936',
  Agda: '#315665',
  wisp: '#7582D1',
  D: '#ba595e',
  Kotlin: '#F18E33',
  Opal: '#f7ede0',
  Crystal: '#776791',
  'Objective-C': '#438eff',
  'ColdFusion CFC': '#ed2cd6',
  Oz: '#fab738',
  Mirah: '#c7a938',
  'Objective-J': '#ff0c5a',
  Gosu: '#82937f',
  FreeMarker: '#0050b2',
  Ruby: '#701516',
  'Component Pascal': '#b0ce4e',
  Arc: '#aa2afe',
  Brainfuck: '#2F2530',
  Nit: '#009917',
  APL: '#5A8164',
  Go: '#375eab',
  'Visual Basic': '#945db7',
  PHP: '#4F5D95',
  Cirru: '#ccccff',
  SQF: '#3F3F3F',
  Glyph: '#e4cc98',
  Java: '#b07219',
  MAXScript: '#00a6a6',
  Scala: '#DC322F',
  Makefile: '#427819',
  ColdFusion: '#ed2cd6',
  Perl: '#0298c3',
  Lua: '#000080',
  Vue: '#2c3e50',
  Verilog: '#b2b7f8',
  Factor: '#636746',
  Haxe: '#df7900',
  'Pure Data': '#91de79',
  Forth: '#341708',
  Red: '#ee0000',
  Hy: '#7790B2',
  Volt: '#1F1F1F',
  LSL: '#3d9970',
  eC: '#913960',
  CoffeeScript: '#244776',
  HTML: '#e44b23',
  Lex: '#DBCA00',
  'API Blueprint': '#2ACCA8',
  Swift: '#ffac45',
  C: '#555555',
  AutoHotkey: '#6594b9',
  Isabelle: '#FEFE00',
  Metal: '#8f14e9',
  Clarion: '#db901e',
  JSONiq: '#40d47e',
  Boo: '#d4bec1',
  AutoIt: '#1C3552',
  Clojure: '#db5855',
  Rust: '#dea584',
  Prolog: '#74283c',
  SourcePawn: '#5c7611',
  AMPL: '#E6EFBB',
  FORTRAN: '#4d41b1',
  ANTLR: '#9DC3FF',
  Harbour: '#0e60e3',
  Tcl: '#e4cc98',
  BlitzMax: '#cd6400',
  PigLatin: '#fcd7de',
  Lasso: '#999999',
  ECL: '#8a1267',
  VHDL: '#adb2cb',
  Elm: '#60B5CC',
  'Propeller Spin': '#7fa2a7',
  X10: '#4B6BEF',
  IDL: '#a3522f',
  ATS: '#1ac620',
  Ada: '#02f88c',
  'Unity3D Asset': '#ab69a1',
  Nu: '#c9df40',
  LFE: '#004200',
  SuperCollider: '#46390b',
  Oxygene: '#cdd0e3',
  ASP: '#6a40fd',
  Assembly: '#6E4C13',
  Gnuplot: '#f0a9f0',
  JFlex: '#DBCA00',
  NetLinx: '#0aa0ff',
  Turing: '#45f715',
  Vala: '#fbe5cd',
  Processing: '#0096D8',
  Arduino: '#bd79d1',
  FLUX: '#88ccff',
  NetLogo: '#ff6375',
  'C Sharp': '#178600',
  CSS: '#563d7c',
  'Emacs Lisp': '#c065db',
  Stan: '#b2011d',
  SaltStack: '#646464',
  QML: '#44a51c',
  Pike: '#005390',
  LOLCODE: '#cc9900',
  ooc: '#b0b77e',
  Handlebars: '#01a9d6',
  J: '#9EEDFF',
  Mask: '#f97732',
  EmberScript: '#FFF4F3',
  TeX: '#3D6117',
  Nemerle: '#3d3c6e',
  KRL: '#28431f',
  "Ren'Py": '#ff7f7f',
  'Unified Parallel C': '#4e3617',
  Golo: '#88562A',
  Fancy: '#7b9db4',
  OCaml: '#3be133',
  Shen: '#120F14',
  Pascal: '#b0ce4e',
  'F#': '#b845fc',
  Puppet: '#302B6D',
  ActionScript: '#882B0F',
  Diff: '#88dddd',
  'Ragel in Ruby Host': '#9d5200',
  Fantom: '#dbded5',
  Zephir: '#118f9e',
  Click: '#E4E6F3',
  Smalltalk: '#596706',
  DM: '#447265',
  Ioke: '#078193',
  PogoScript: '#d80074',
  LiveScript: '#499886',
  JavaScript: '#f1e05a',
  VimL: '#199f4b',
  PureScript: '#1D222D',
  ABAP: '#E8274B',
  Matlab: '#bb92ac',
  Slash: '#007eff',
  R: '#198ce7',
  Erlang: '#B83998',
  Pan: '#cc0000',
  LookML: '#652B81',
  Eagle: '#814C05',
  Scheme: '#1e4aec',
  PLSQL: '#dad8d8',
  Python: '#3572A5',
  Max: '#c4a79c',
  'Common Lisp': '#3fb68b',
  Latte: '#A8FF97',
  XQuery: '#5232e7',
  Omgrofl: '#cabbff',
  XC: '#99DA07',
  Nimrod: '#37775b',
  SystemVerilog: '#DAE1C2',
  Chapel: '#8dc63f',
  Groovy: '#e69f56',
  Dylan: '#6c616e',
  E: '#ccce35',
  Parrot: '#f3ca0a',
  'Grammatical Framework': '#79aa7a',
  'Game Maker Language': '#8fb200',
  Papyrus: '#6600cc',
  'NetLinx+ERB': '#747faa',
  Clean: '#3F85AF',
  Alloy: '#64C800',
  Squirrel: '#800000',
  PAWN: '#dbb284',
  UnrealScript: '#a54c4d',
  'Standard ML': '#dc566d',
  Slim: '#ff8f77',
  Perl6: '#0000fb',
  Julia: '#a270ba',
  Haskell: '#29b544',
  NCL: '#28431f',
  Io: '#a9188d',
  Rouge: '#cc0088',
  cpp: '#f34b7d',
  'AGS Script': '#B9D9FF',
  Dogescript: '#cca760',
  nesC: '#94B0C7'
}

function getRundomColor() {
  const keys = Object.keys(colors)
  return colors[keys[(keys.length * Math.random()) << 0]]
}

export const Repository = ({ repository }: any) =>
  <Wrapper>
    <Name href={repository.svn_url} target="_blank">
      {repository.owner.login}/<i>{repository.name}</i>
    </Name>
    <Discription>{repository.description}</Discription>
    <LableWrapper>
      {repository.language &&
        <Language>
          <LanguageCircle color={colors[repository.language] || getRundomColor()} />
          {repository.language}
        </Language>}
      <Icon href={repository.svn_url + '/stargazers'}>
        <Star />
        {repository.stargazers_count}
      </Icon>
      <Icon href={repository.svn_url + '/network'}>
        <Fork />
        {repository.forks_count}
      </Icon>
    </LableWrapper>
  </Wrapper>
