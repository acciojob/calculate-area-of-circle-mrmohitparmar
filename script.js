function calculateArea() {
    let radius = prompt("Enter the radius of the circle:");
    let pi = 22/7;

    let area = pi * Number(radius) * Number(radius);

    // Test case ke liye exact output format
    alert(`The area of the circle with radius ${radius} is ${area.toFixed(2)}`);
}

calculateArea();
