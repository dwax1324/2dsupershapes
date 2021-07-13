let osc = 0;


function setup() {
    createCanvas(600, 600);
    slider1 = createSlider(0, 2, 0.3, 0.01);
    slider2 = createSlider(0, 2, 0.3, 0.01);
    slider3 = createSlider(0, 2, 0.3, 0.01);
    sliderA = createSlider(0, 2, 1, 0.01);
    sliderB = createSlider(0, 2, 1, 0.01);
}

let n1 = 0.3;
let n2 = 0.3;
let n3 = 0.3;
let m = 5;
let a = 1;
let b = 1;

function superShape(theta) {

    let part1 = (1 / a) * cos((theta * m) / 4);
    part1 = abs(part1);
    part1 = pow(part1, n2);

    let part2 = (1 / b) * sin((theta * m) / 4);
    part2 = abs(part2);
    part2 = pow(part2, n3);

    let part3 = pow(part1 + part2, 1 / n1);
    if (part3 === 0) {
        console.log("divide by zero");
        return 0;
    }
    return 1 / part3;
}


function draw() {
    m = map(sin(osc), -1, 1, 0, 10);
    n1 = slider1.value();
    n2 = slider2.value();
    n3 = slider3.value();
    a = sliderA.value();
    b = sliderB.value();
    osc += 0.02;
    background(51);
    translate(width / 2, height / 2);
    fill(200, 200, 200);
    noStroke();
    textSize(32);
    text(`n1:${n1}\nn2:${n2}\nn3:${n3}\na:${a}\nb:${b}\nm:${m}
    
    
    `, -(width / 2), -(height / 2) + 30);

    noFill();
    stroke(random(100, 200), 155, 0);
    strokeWeight(5);

    let radius = 100;
    let total = 200;
    let increment = TWO_PI / total;
    beginShape();
    for (let angle = 0; angle < TWO_PI; angle += increment) {
        let r = superShape(angle);
        let x = radius * r * cos(angle);
        let y = radius * r * sin(angle);
        vertex(x, y);
    }
    endShape(CLOSE)
}