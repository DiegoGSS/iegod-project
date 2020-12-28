import React from 'react'
import Chord from '@tombatossals/react-chords/lib/Chord'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

function BasicChordList(props) {
  const totalData = props.jsonData
  const loadedInstrument = totalData.main
  const loadedTunings = totalData.tunings
  const loadedChords = totalData.chords
  const loadedKeys = totalData.keys
  const loadedSuffixes = totalData.suffixes
  const info = totalData.info
  const tudoPeloIstilo = {
    width: '20%',
  }
  const instrument = {
    strings: loadedInstrument.strings,
    fretsOnChord: loadedInstrument.fretsOnChord,
    name: loadedInstrument.name,
    keys: loadedKeys,
    tunings: loadedTunings,
  }
  const lite = false // defaults to false if omitted
  let listToRender = []
  loadedKeys.forEach((key) => {
    listToRender.push(
      <h4>
        {key} {loadedSuffixes[0]} chord
      </h4>
    )
    let renderedChordsInKey = []
    loadedChords[key][0].positions.forEach((chord) => {
      const chordToRender = {
        frets: chord.frets,
        fingers: chord.fingers,
        barres: chord.barres,
        capo: chord.capo,
        baseFret: chord.baseFret,
      }
      renderedChordsInKey.push(
        <Col md={3} style={tudoPeloIstilo}>
          <p>
            {loadedChords[key][0].key}
            {loadedChords[key][0].suffix}
          </p>
          <Chord
            chord={chordToRender}
            instrument={instrument}
            lite={lite}
          ></Chord>
        </Col>
      )
    })
    listToRender.push(renderedChordsInKey)
  })

  return (
    <Container>
      <h1>{info.title}</h1>
      <p>{info.description}</p>
      <Row>{listToRender}</Row>
    </Container>
  )
}

export default BasicChordList
