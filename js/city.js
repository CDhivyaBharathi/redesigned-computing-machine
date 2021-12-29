AFRAME.registerComponents("city",{
    init:function(){
        var models = getModels()
        var component_city = Object.keys(models)

        component_city.map(i=>{
            var component = models[i]
            this.createModels(component)
        })
    },
    getModels:function(){
        return fetch("js/model.json").then(res=>res.json()).then(data=>data)
    },
    createModels:function(component){
        var modelName = component.model_name
        var barcodeValue = component.barcode_value
        var modelUrl = component.model_url
        var position = component.position
        var rotation = component.rotation
        var scale = component.scale

        var scene = document.querySelector("a-scene");
        var marker = document.createElement("a-entity")
        marker.setAttribute("id",`marker-${barcodeValue}`)
        marker.setAttribute("type","barcode")
        marker.setAttribute("value",barcodeValue)
        scene.appendChild(marker)

        var model = document.createElement("a-entity")
        model.setAttribute("id",`model-${modelName}`)
        model.setAttribute("gltf-model",modelUrl)
        model.setAttribute("position",position)
        model.setAttribute("rotation",rotation)
        model.setAttribute("scale",scale)
        marker.appendChild(model)

    }
})