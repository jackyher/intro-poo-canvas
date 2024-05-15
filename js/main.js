const canvasOOP = document.getElementById("canvasOOP");
const canvasRandom = document.getElementById("canvasRandom");
const canvasMultiple = document.getElementById("canvasMultiple");

const ctx = canvasOOP.getContext("2d");
const ctxRandom = canvasRandom.getContext("2d");
const ctxMultiple = canvasMultiple.getContext("2d");

/* const window_height = window.innerHeight; //Saca el tamaño de la pantalla
const window_width = window.innerWidth;
 */
canvasOOP.height = "200";//window_height;
canvasOOP.width = "300";//window_width;

canvasRandom.height = "200";
canvasRandom.width = "300";

canvasMultiple.height = "200";
canvasMultiple.width = "300";

canvasOOP.style.background = "#d9e7fa";
canvasRandom.style.background = '#d4ddfa';
canvasMultiple.style.background = '#e5dcf5';


class Circle {
    //Constructor que carga lo valores predeterminados del objeto
    constructor(x, y, radius, color, text, backcolor) {
        this.posX = x;
        this.posY = y;
        this.radius = radius;
        this.color = color;
        this.text = text;
        this.backcolor = backcolor;
    }

    //Método para renderizar el objeto
    draw(context) {
        //Rellena el objeto
        context.beginPath();
        context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
        context.fillStyle = this.backcolor;
        context.fill();

        //Dibuja la línea del objeto
        context.lineWidth = 2;
        context.strokeStyle = this.color;
        context.stroke();

        //Dibuja el texto al centro del objeto
        context.textAlign = "center" ; //Alineación horizontal 
        context.textBaseline="middle"; //Alineación vertical
        context.font = "16px Poppins";
        context.fillStyle = "white";
        context.fillText(this.text,this.posX, this.posY); //Renderiza un texto en el centro del objeto
        
        context.closePath();
    }
}

let miCirculo = new Circle(canvasOOP.width / 2, canvasOOP.height / 2, 50, 'rgb(84, 148, 247)', 'Tec', '#a9ccfc');
miCirculo.draw(ctx);

let randomX =  Math.random()* canvasRandom.width;
let randomY =  Math.random()* canvasRandom.height;
let randomRadius = Math.floor(Math.random()*100 + 30);

let miCirculoRandom = new Circle(randomX, randomY, randomRadius, '#85a1ff', 'Tec', '#b1c2fa');
miCirculoRandom.draw(ctxRandom);


let arrayCircle = [];

for (let i = 0; i < 10; i++) {
    let randomRadius = Math.min(Math.random() * 10 + 30, Math.min(canvasMultiple.width, canvasMultiple.height) / 2);
    let randomX = Math.random() * (canvasMultiple.width - 2 * randomRadius) + randomRadius;
    let randomY = Math.random() * (canvasMultiple.height - 2 * randomRadius) + randomRadius;
    //let randomRadius = Math.floor(Math.random() * 10 + 30);

    let miCirculoMultiple = new Circle(randomX, randomY, randomRadius, "#bda1f0", i + 1, "#d1c3eb");

    arrayCircle.push(miCirculoMultiple);
    arrayCircle[i].draw(ctxMultiple);
}
