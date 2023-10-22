let some: unknown;
some = "Text";

let str: string | undefined;

if (typeof some === "string") {
  str = some as string;
}
