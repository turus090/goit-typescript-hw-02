/*
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)?
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/
var Literal;
(function (Literal) {
    Literal[Literal["enable"] = 0] = "enable";
    Literal[Literal["disable"] = 1] = "disable";
})(Literal || (Literal = {}));
var union;
var literal;
