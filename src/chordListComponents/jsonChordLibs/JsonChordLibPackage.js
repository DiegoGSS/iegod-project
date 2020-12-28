import majorChordsJson from './majorChords.json'
import minorChordsJson from './minorChords.json'
import cagedMajorChordsJson from './cagedMajorChords.json'
import cagedMinorChordsJson from './cagedMinorChords.json'
import notableOpenChordsJson from './notableOpenChords.json'

function JsonChordLibPackage() {
  const libList = [
    majorChordsJson,
    minorChordsJson,
    cagedMajorChordsJson,
    cagedMinorChordsJson,
    notableOpenChordsJson,
  ]
  return {
    libList: libList,
    totalLibs: libList.length,
  }
}

export default JsonChordLibPackage
