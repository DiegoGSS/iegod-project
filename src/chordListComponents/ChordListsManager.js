import BasicChordList from './BasicChordList'
import React from 'react'
import majorChordsJson from './jsonChordLibs/majorChords.json'
import minorChordsJson from './jsonChordLibs/minorChords.json'
import cagedMajorChordsJson from './jsonChordLibs/cagedMajorChords.json'
import cagedMinorChordsJson from './jsonChordLibs/cagedMinorChords.json'

function ChordListsManager() {
  const majorChordsData = JSON.parse(JSON.stringify(majorChordsJson))
  const majorChordList = (
    <BasicChordList jsonData={majorChordsData}></BasicChordList>
  )

  const minorChordsData = JSON.parse(JSON.stringify(minorChordsJson))
  const minorChordList = (
    <BasicChordList jsonData={minorChordsData}></BasicChordList>
  )

  const cagedMajorChordsData = JSON.parse(JSON.stringify(cagedMajorChordsJson))
  const cagedMajorChordList = (
    <BasicChordList jsonData={cagedMajorChordsData}></BasicChordList>
  )

  const cagedMinorChordsData = JSON.parse(JSON.stringify(cagedMinorChordsJson))
  const cagedMinorChordList = (
    <BasicChordList jsonData={cagedMinorChordsData}></BasicChordList>
  )

  return (
    <div>
      {majorChordList}
      {minorChordList}
      {cagedMajorChordList}
      {cagedMinorChordList}
    </div>
  )
}

export default ChordListsManager
