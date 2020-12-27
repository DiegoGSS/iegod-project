import 'react'
import Ajv from 'ajv'

function JsonChordLibValidator(props) {
  const jsonSchemaData = JSON.parse(JSON.stringify(props.schemaJson))
  const chordLibData = JSON.parse(JSON.stringify(props.chordLibJson))

  const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}
  const validate = ajv.compile(jsonSchemaData)
  const valid = validate(chordLibData)
  console.log('validacao!', valid, validate.errors)
  return validate
}

export default JsonChordLibValidator
