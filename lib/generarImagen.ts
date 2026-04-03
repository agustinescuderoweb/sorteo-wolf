import { createCanvas, loadImage, registerFont } from "canvas";
import path from "path";

// 🔥 registrar font
registerFont(
  path.join(process.cwd(), "public/fonts/Inter.ttf"),
  { family: "Inter" }
);

export async function generarImagen(numero: string) {
  const imagePath = path.join(process.cwd(), "public/img/sorteo.jpeg");
  const image = await loadImage(imagePath);

  const canvas = createCanvas(image.width, image.height);
  const ctx = canvas.getContext("2d");

  // fondo
  ctx.drawImage(image, 0, 0);

  // estilo texto
  ctx.font = "bold 130px Inter";
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";

  // posición (ajustamos sobre el recuadro)
  ctx.fillText(numero, image.width / 2, image.height * 0.67);

  return canvas.toBuffer("image/jpeg");
}