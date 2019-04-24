type Format = string;

function validateFormat(format: Format) {
  if (format === undefined) {
    throw new Error('invariant requires an error message argument');
  }
};

export default function _assert(condition: boolean, format: Format) {
  validateFormat(format);

  if (!condition) {
    let error;
    error = new Error(format);
    error.name = 'Assert Error';
    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}
