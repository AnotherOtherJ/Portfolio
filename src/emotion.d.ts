import "@emotion/react";

declare module "@emotion/react" {
  type Color = `#${string}`;

  export interface Theme {
    colors: {
      background: Color;
      backgroundAcc: Color;
      font: Color;
      primary: Color;
      accent: Color;
      error: Color;
    };
  }
}
