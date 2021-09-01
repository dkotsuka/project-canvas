import React, { useEffect, useRef } from "react";
import styled from "styled-components";

export const Canvas: React.FC = () => {
  const canvas = useRef<HTMLCanvasElement>(null);
  let ctx: CanvasRenderingContext2D | undefined | null;

  useEffect(() => {
    ctx = canvas.current?.getContext("2d");
  }, []);

  const drawRect = (info: any, style = {} as any) => {
    if (!ctx) return null;
    const { x, y, w, h } = info;
    const { borderColor = "black", borderWidth = 1 } = style;

    ctx.beginPath();
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = borderWidth;
    ctx.rect(x, y, w, h);
    ctx.stroke();
  };

  const randomize = (range: number) => {
    return Math.round(Math.random() * range);
  };

  return (
    <Container>
      <StyledCanvas
        ref={canvas}
        tabIndex={0}
        width={160}
        height={144}
        onKeyPressCapture={(event) =>
          drawRect({ x: randomize(160), y: randomize(144), w: 10, h: 10 })
        }
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: red;
  justify-content: center;
`;

const StyledCanvas = styled.canvas`
  background-color: white;
  border-radius: 8px;
  margin: 16px;
  max-height: 288px;
  max-width: 320px;
  :focus {
    border: 4px solid black;
    outline: none;
  }
`;
