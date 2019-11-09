export const SAMPLE_TYPE = 'SAMPLE'
export const SAMPLE_CONSTANT = {
  FIRST: 'FIRST',
  SECOND: 'SECOND',
  THREE: 'THREE'
}

export function sampleAction(payload) {
  //payload must be one of SAMPLE_CONSTANT for example
  return { type: SAMPLE_TYPE, payload }
}