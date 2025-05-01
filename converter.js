function convert() {
    const unitType = document.getElementById("unitType").value;
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    let result;

    switch (unitType) {
        case "weight":
            result = inputValue * 0.453592; // Pounds to Kilograms
            document.getElementById("result").innerText = `${inputValue} pounds = ${result.toFixed(2)} kg`;
            break;
        case "volume":
            result = inputValue / 1000; // Milliliters to Liters
            document.getElementById("result").innerText = `${inputValue} ml = ${result.toFixed(2)} L`;
            break;
        case "length":
            result = inputValue / 1000; // Meters to Kilometers
            document.getElementById("result").innerText = `${inputValue} m = ${result.toFixed(2)} km`;
            break;
        default:
            document.getElementById("result").innerText = "Please select a unit type.";
    }
}
