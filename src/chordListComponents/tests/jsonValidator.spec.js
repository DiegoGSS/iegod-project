import JsonChordLibValidator from '../validators/JsonChordLibValidator'
import jsonChordLibSchema from '../jsonChordLibSchemas/jsonChordLibSchema.json'
import jsonChordLibPackage from '../jsonChordLibs/JsonChordLibPackage'

describe('Validating jsons against the schema', () => {
  it('Validate All Jsons', () => {
    const chordLibPackage = jsonChordLibPackage()
    chordLibPackage.libList.forEach((lib) => {
      expect(
        JsonChordLibValidator({
          schemaJson: jsonChordLibSchema,
          chordLibJson: lib,
        })
      ).toEqual(true)
    })
    expect.assertions(chordLibPackage.totalLibs)
  })
})
