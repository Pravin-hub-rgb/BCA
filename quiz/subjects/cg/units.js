// Computer Graphics Units Configuration
const cgUnits = [
    {
        id: 1,
        name: "Introduction to Computer Graphics",
        description: "Definition, Applications, Graphics Hardware, Display Devices: Refresh Cathode Ray Tube, Raster Scan Display, Plasma display, Liquid Crystal display, Plotters, Printers. Dithering, Half-toning, Aliasing, Anti-aliasing.",
        questionCount: 20
    },
    {
        id: 2,
        name: "Mathematics for Computer Graphics",
        description: "Point representation, Vector representation, Matrices and operations related to matrices, Vector addition and vector multiplication, Scalar product of two vectors, Vector product of two vectors. Parametric equations of lines and conics.",
        questionCount: 20
    },
    {
        id: 3,
        name: "Drawing, Clipping, and Filling Algorithms",
        description: "Line Drawing Algorithms: DDA algorithms, Bresenham's Line algorithm. Circle and ellipse generation algorithm. Clipping: Point Clipping, Line Clipping. Polygon Clipping. Filling: Inside Tests, Flood fill algorithm, Boundary-Fill Algorithm and scan-line polygon fill algorithm.",
        questionCount: 20
    },
    {
        id: 4,
        name: "2D and 3D Transformations",
        description: "2D Transformation: 2D transformation, Basic Transformations, Composite transformations: Reflection, Shearing, Transformations between coordinate systems. 3D Transformation: 3D transformations, Parallel projection, Perspective projection, Visible lines and surfaces identification, Hidden surface removal algorithms.",
        questionCount: 20
    },
    {
        id: 5,
        name: "Animation and GKS Standards",
        description: "Animation: Introduction to Animation, Principles of Animation, Types of Animation, Types of Animation Systems: Scripting, Procedural, Representational, Stochastic, etc. GKS Standards, GKS Primitives – Polyline, Polymarker, and Fill area, Text, GKS Workstation and Metafiles.",
        questionCount: 20
    }
];

// Make available globally for browser environment
if (typeof window !== 'undefined') {
    window.cgUnits = cgUnits;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = cgUnits;
}
