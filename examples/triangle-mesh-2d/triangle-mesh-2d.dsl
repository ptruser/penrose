-- Mesh combinatorics
type Vertex
type Edge
type Halfedge
type DualEdge
type Triangle
type Corner

constructor MakeEdge(Vertex i, Vertex j) -> Edge
constructor MakeHalfedge(Vertex from, Vertex to) -> Halfedge
constructor MakeTriangle(Vertex i, Vertex j, Vertex k) -> Triangle
constructor MakeCorner( Vertex inner, Vertex outer1, Vertex outer2 ) -> Corner
constructor MakeDualEdge(Triangle a, Triangle b) -> DualEdge

predicate IsBoundaryVertex(Vertex v)
predicate IsBoundaryEdge(Edge e)
predicate IsBoundaryTriangle(Triangle t)

predicate HasLabel(Vertex v)

-- Geometry
type Point
type Circle
type Length

predicate OnCircle(Vertex v, Circle C)

constructor Barycenter(Triangle t) -> Point
constructor Circumcenter(Triangle t) -> Point
constructor Incenter(Triangle t) -> Point

constructor Circumcircle(Triangle t) -> Circle
constructor Incircle(Triangle t) -> Circle

constructor EdgeLength(Edge e) -> Length
constructor DualEdgeLength(DualEdge d) -> Length

-- Specific to angle-equivalence.sub
function similarity(Vertex i) -> Vertex

-- Specific to concyclic-pair.sub
predicate IsFlipped(Edge e)
predicate Concyclic(Triangle s, Triangle t)

