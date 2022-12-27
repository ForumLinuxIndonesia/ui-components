function setSize() {}

function setColor() {}

function setVariant() {}

function setRounded() {}

/**
 * Properties:
 * @label Button label
 * @color Text color
 * @variant Button Variant
 * @rounded
 * @onToggle
 * @className Your custom class
 */
function Button(data) {
	let classList = `${setSize(data.size)} ${setColor(data.color)} ${setVariant(data.variant)} ${setRounded(data.rounded)} ${data.className}`;
	return <button className={classList}>{data.label}</button>;
}

export default React.memo(Button);
