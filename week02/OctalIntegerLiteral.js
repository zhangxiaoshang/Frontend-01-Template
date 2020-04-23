let OctalIntegerLiteral = /^0[oO](OctalDigits)$/;
let OctalDigits = /(OctalDigit)|(OctalDigits)(OctalDigit)/;
let OctalDigit = /[0-7]/;

OctalDigits = /[0-7]+/;

OctalIntegerLiteral = /^0[oO][0-7]+$/;
