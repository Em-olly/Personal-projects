function convert() {
    const unitType = document.getElementById("unitType").value;
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    let result;

    switch (unitType) {
        case "weight":
            if (document.getElementById("conversionDirection").value === "toKg") {
                result = inputValue * 0.453592; // Pounds to Kilograms
                document.getElementById("result").innerText = `${inputValue} pounds = ${result.toFixed(2)} kg`;
            } else {
                result = inputValue / 0.453592; // Kilograms to Pounds
                document.getElementById("result").innerText = `${inputValue} kg = ${result.toFixed(2)} pounds`;
            }
            break;
        case "volume":
            if (document.getElementById("conversionDirection").value === "toL") {
                result = inputValue / 1000; // Milliliters to Liters
                document.getElementById("result").innerText = `${inputValue} ml = ${result.toFixed(2)} L`;
            } else {
                result = inputValue * 1000; // Liters to Milliliters
                document.getElementById("result").innerText = `${inputValue} L = ${result.toFixed(2)} ml`;
            }
            break;
        case "length":
            if (document.getElementById("conversionDirection").value === "toKm") {
                result = inputValue / 1000; // Meters to Kilometers
                document.getElementById("result").innerText = `${inputValue} m = ${result.toFixed(2)} km`;
            } else {
                result = inputValue * 1000; // Kilometers to Meters
                document.getElementById("result").innerText = `${inputValue} km = ${result.toFixed(2)} m`;
            }
            break;
        default:
            document.getElementById("result").innerText = "Please select a unit type.";
    }
}