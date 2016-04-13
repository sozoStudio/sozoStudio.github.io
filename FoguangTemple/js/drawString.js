/*
 * draw a multiline string rotated in a canvas
 * 
 * @param ctx (M) context of the canvas
 * @param text (M) string may contain \n
 * @param posX (M) horizontal start position
 * @param posY (M) vertical start position
 * @param textColor color
 * @param rotation in degrees (by 360)
 * @param font must be installed on client use websafe
 * @param fonSize in Pixels
 * 
 * all (M) params are mandatory - rest is optional
 */
function drawString(ctx, text, posX, posY, textColor, rotation, font, fontSize) {
	var lines = text.split("\n");
	if (!rotation) rotation = 0;
	if (!font) font = "'serif'";
	if (!fontSize) fontSize = 16;
	if (!textColor) textColor = '#000000';
	ctx.save();
	ctx.font = fontSize + "px " + font;
	ctx.fillStyle = textColor;
	ctx.translate(posX, posY);
	ctx.rotate(rotation * Math.PI / 180);
	for (i = 0; i < lines.length; i++) {
 		ctx.fillText(lines[i],0, i*fontSize);
	}
	ctx.restore();
}
/* end */
