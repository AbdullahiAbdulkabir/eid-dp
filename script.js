function getInputValue() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    var inputVal = document.getElementById('Mname').value;

    canvas.width = 2501;
    canvas.height = 2500;

    const frame = document.getElementById('frame');
    ctx.drawImage(frame, 0, 0);
    ctx.textAlign = 'center';
    ctx.font = 'bold 63px Abhaya Libre';
    ctx.fillStyle = "#ffffff";
    ctx.fillText(`${inputVal}`, frame.width / 2, 1500);

    if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(canvas.msToBlob(), `DW_${inputVal}.png`);
    } else {
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.href = canvas.toDataURL();
        a.download = `i-will-be-attending-4-${inputVal}.png`;
        a.click();
        document.body.removeChild(a);
    }
}
