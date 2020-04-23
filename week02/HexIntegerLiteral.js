let HexIntegerLiteral = /^0[xX](HexDigits)/;
let HexDigits = /(HexDigit)|(HexDigit)+(HexDigit)/;
let HexDigit = /[0-9a-fA-F]/;

HexDigits = /[0-9a-fA-F]+/;
HexIntegerLiteral = /^0[xX][0-9a-fA-F]+$/;
