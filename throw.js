AFRAME.registerComponent("bowling-balls", {
    init: function(){
        this.throwBalls()
    },

    throwBalls: function(){
        window.addEventListener("keydown", (e)=>{
            if(e.key === "t"){
                var bowlingBall = document.createElement("a-entity")
                bowlingBall.setAttribute("geometry", {primitive: "sphere", radius:0.5})
                bowlingBall.setAttribute("material", "color", "black")

                var cam  = document.querySelector("#camera")
                pos = cam.getAttribute("position")
                bowlingBall.setAttribute("position", {x: pos.x, y: pos.y-0.5, z: pos.z})

                var camera = document.querySelector("#camera").object3D
                var direction = new THREE.Vector3()
                camera.getWorldDirection(direction)
                bowlingBall.setAttribute("velocity", direction.multiplyScalar(-10))

                var scene = document.querySelector("#scene")
                scene.appendChild(bowlingBall)
            }
        })
    }
})