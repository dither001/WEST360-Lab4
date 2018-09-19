
var gl, program;

// Define vertices of one branch here
var vertices = [
    // You only need to use a group of vec2() here, because this is a two dimensional wreath.
    // It is not necessary to only use values in range [-1,1], because the size could be scaled late. 
    // Your code goes here.


];

var CTM; 
var CTMLoc;

function main() {
    //Retrieve <canvas> element
    var canvas = document.getElementById( "gl-canvas" );
    
    //Get the rendering context for WebGL
    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }


    //  Configure WebGL
    gl.clearColor( 1.0, 1.0, 1.0, 1.0 );
    gl.viewport( 0, 0, canvas.width, canvas.height );

    //  Load shaders and initialize attribute buffers
    program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );

    // Load the data into the GPU
    var bufferId = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW );

    // Associate our shader variables with our data buffer
    var vPosition = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );

    CTM = mat4(); // Initialize CTM as a identity matrix
    // Connect matrix in html file with CTMLoc. 
    CTMLoc = gl.getUniformLocation(program, "matrix");

    //Draw the stars
    render();
};

//Draw the 12 stars
function render() {
    //Clear <canvas> 
    gl.clear( gl.COLOR_BUFFER_BIT );

    // You should transform one branch to form a star, and then transform one star to form a wreath
    // You should not push any exact positions to the array vertices. 
    // Instead of that, you should draw this wreath only by transformations. 
    // Your code goes here:
   


    // You do not change any thing below this line.
    // You may need to put codes below in for loop(s). 
    // Pass CTM to CTMLoc
    gl.uniformMatrix4fv(CTMLoc, false, flatten(CTM));
    // Use 7 vertices to draw one branch
    gl.drawArrays(gl.LINE_STRIP, 0, 7);
}