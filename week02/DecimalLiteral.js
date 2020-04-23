let NumericLiteral = /DecimalLiteral|BinaryInteger|OctalIntegerLiteral|HexIntegerLiteral/;
let DecimalLiteral = /^DecimalIntegerLiteral\.(DecimalDigits)?(ExponentPart)?|^\.(DecimalDigits)(ExponentPart)?|^(DecimalIntegerLiteral)(ExponentPart)?/;
// let DecimalIntegerLiteral = /0|NonZeroDigit(DecimalDigits)?/;
// let DecimalDigits = /DecimalDigit|DecimalDigits DecimalDigit/;
// let DecimalDigit = /[0-9]/;
let NonZeroDigit = /[1-9]/;
// let ExponentPart = /ExponentIndicator SignedInteger/;
// let ExponentIndicator = /[eE]/;
// let SignedInteger = /DecimalDigits|\+DecimalDigits|\-DecimalDigits/;

// let SignedInteger = /DecimalDigits|\+DecimalDigits|\-DecimalDigits/;
ExponentPart = /[eE]([0-9]+|\+[0-9]+|\-[0-9]+)/;
DecimalDigits = /[0-9]+/;
DecimalDigit = /[0-9]/;
DecimalIntegerLiteral = /0|[1-9]([0-9]+)?/;
DecimalLiteral = /^(0|[1-9]([0-9]+)?)\.([0-9]+)?([eE]([0-9]+|\+[0-9]+|\-[0-9]+))?$|^\.([0-9]+)([eE]([0-9]+|\+[0-9]+|\-[0-9]+))?$|^(0|[1-9]([0-9]+)?)([eE]([0-9]+|\+[0-9]+|\-[0-9]+))?$/;
