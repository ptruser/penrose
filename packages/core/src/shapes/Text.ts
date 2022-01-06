import {
  INamed,
  IStroke,
  IFill,
  ICenter,
  IRect,
  IRotate,
  IString,
  IShape,
} from "types/shapes";
import { IStrV } from "types/value";
import {
  Canvas,
  sampleColor,
  sampleNoPaint,
  sampleStroke,
  sampleVector,
  sampleZero,
  StrV,
} from "./Samplers";

export interface IText
  extends INamed,
    IStroke,
    IFill,
    ICenter,
    IRect,
    IRotate,
    IString {
  // TODO; pare down this set of attributes
  visibility: IStrV;
  fontFamily: IStrV;
  fontSize: IStrV;
  fontSizeAdjust: IStrV;
  fontStretch: IStrV;
  fontStyle: IStrV;
  fontVariant: IStrV;
  fontWeight: IStrV;
  textAnchor: IStrV;
  alignmentBaseline: IStrV;
}

export const sampleText = (canvas: Canvas): IText => ({
  name: StrV("defaultText"),
  strokeWidth: sampleStroke(),
  strokeStyle: StrV("solid"),
  strokeColor: sampleNoPaint(),
  strokeDashArray: StrV(""),
  fillColor: sampleColor(),
  center: sampleVector(canvas),
  width: sampleZero(),
  height: sampleZero(),
  rotation: sampleZero(),
  string: StrV("defaultText"),
  visibility: StrV(""),
  fontFamily: StrV(""),
  fontSize: StrV("12pt"),
  fontSizeAdjust: StrV(""),
  fontStretch: StrV(""),
  fontStyle: StrV(""),
  fontVariant: StrV(""),
  fontWeight: StrV(""),
  textAnchor: StrV("middle"),
  alignmentBaseline: StrV("middle"),
});

export type Text = IShape & { shapeType: "Text" } & IText;

export const makeText = (canvas: Canvas, properties: Partial<IText>): Text => ({
  ...sampleText(canvas),
  ...properties,
  shapeType: "Text",
});