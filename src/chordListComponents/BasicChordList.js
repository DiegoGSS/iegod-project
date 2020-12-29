import React from 'react'
import Chord from '@tombatossals/react-chords/lib/Chord'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function BasicChordList(props) {
  const totalData = props.jsonData
  const loadedInstrument = totalData.main
  const loadedTunings = totalData.tunings
  const loadedChords = totalData.chords
  const loadedKeys = totalData.keys
  const info = totalData.info
  const instrument = {
    strings: loadedInstrument.strings,
    fretsOnChord: loadedInstrument.fretsOnChord,
    name: loadedInstrument.name,
    keys: loadedKeys,
    tunings: loadedTunings,
  }
  const lite = false // defaults to false if omitted
  let listToRender = []
  loadedChords.forEach((chordKey) => {
    let renderedChordsInKey = []
    chordKey.positions.forEach((chord) => {
      const chordToRender = {
        frets: chord.frets,
        fingers: chord.fingers,
        barres: chord.barres,
        capo: chord.capo,
        baseFret: chord.baseFret,
      }
      renderedChordsInKey.push(
        <Col xs={6} md={4} lg={3} xl={2}>
          <p
            style={{
              textAlign: 'center',
              marginRight: '20px',
              marginLeft: '20px',
              marginBottom: '5px',
              marginTop: '5px',
            }}
          >
            {chordKey.key}
            {chordKey.suffix}
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
    <div>
      <Row style={{ display: 'flex' }}>
        <h2 style={{ textAlign: 'center', width: '100%', marginTop: '30px' }}>
          {info.title}
        </h2>
      </Row>
      <Row style={{ display: 'flex' }}>
        <p
          style={{
            textAlign: 'center',
            marginRight: '20px',
            marginLeft: '20px',
            marginBottom: '10px',
            marginTop: '10px',
          }}
        >
          {info.description}
        </p>
      </Row>

      <Row style={{ display: 'flex' }}>{listToRender}</Row>
    </div>
  )
}

export default BasicChordList
