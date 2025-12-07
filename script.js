function calculateArea() {
    // Get the radius from the user
    let radius = prompt("Enter the radius of the circle:");
    let pi = 22/7;

    // Calculate area
    let area = pi * Number(radius) * Number(radius);
    console.log("Area: " + area.toFixed(2));

    // Calculate circumference
    let circumference = 2 * pi * Number(radius);
    alert("Circumference: " + circumference.toFixed(2));
}

calculateArea();
