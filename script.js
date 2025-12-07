function calculateArea() {
    let radius = prompt("Enter the radius of the circle:");
    let area = Math.PI * Number(radius) * Number(radius);

    alert(`The area of the circle with radius ${radius} is ${area.toFixed(2)}`);
}

calculateArea();
