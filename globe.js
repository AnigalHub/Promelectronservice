// This is a draft!
function drawMap(error, world, names) {
    var countries = topojson.feature(world, world.objects.countries).features;
    var neighbors = topojson.neighbors(world, world.objects.countries.geometries);
    nameByID = {};
    names.forEach(function(d) {
        nameByID[+d.id] = d.name;
    });
    var color = d3.scale.category20();
};

var width = 940 / 3.84,
    height = 115 / 2;

var projection = d3.geo.orthographic()
    .scale(48 / 2)
    .translate([width / 2, height / 2])
    .precision(.1)
    .clipAngle(90)
    .rotate([0.3496533, -46.581446]); //my position

var path = d3.geo.path()
    .projection(projection);

var λ = d3.scale.linear()
    .domain([0, width])
    .range([-180, 180]);

var φ = d3.scale.linear()
    .domain([0, height])
    .range([90, -90]);

var graticule = d3.geo.graticule();

var svg = d3.select(".earth").append("svg")
    .attr("width", width)
    .attr("height", height);

svg.append("path")
    .datum(graticule)
    .attr("class", "graticule")
    .attr("d", path);


// see https://github.com/topojson/world-atlas
d3.json("https://d3js.org/world-110m.v1.json", function(error, world) {
    if (error) throw error;

    svg.append("path")
        .datum(topojson.feature(world, world.objects.countries))
        .attr("class", "land")
        .attr("d", path);

    var scrollSpeed = 10,
        current = 120;

    function bgscroll() {
        current += .25;
        projection.rotate([λ(current), 0]);
        svg.selectAll("path").attr("d", path);
    }

    var timer = setInterval(bgscroll, scrollSpeed);



});
