import BasicChordList from './BasicChordList'
import React from 'react'
import majorChordsJson from './jsonChordLibs/majorChords.json'
import minorChordsJson from './jsonChordLibs/minorChords.json'
import cagedMajorChordsJson from './jsonChordLibs/cagedMajorChords.json'

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

  return (
    <div>
      {majorChordList}
      {minorChordList}
      {cagedMajorChordList}
    </div>
  )
}

export default ChordListsManager
