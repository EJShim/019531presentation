import React, {Component} from 'react';
import vtkActor from 'vtk.js/Sources/Rendering/Core/Actor';
import vtkGenericRenderWindow from 'vtk.js/Sources/Rendering/Misc/GenericRenderWindow';
import vtkMapper from 'vtk.js/Sources/Rendering/Core/Mapper';
import vtkSTLReader from 'vtk.js/Sources/IO/Geometry/STLReader';

import mandibleData from '../resources/stl/e137-BASE_L.stl';

class Slide_1 extends Component{

    constructor(props){
        super(props);

        this.animationID = null;
        this.fps = 25;
        this.fpsInterval = 1000 / this.fps;        
        this.prevTime = null;        


        this.genericRenderWindow = vtkGenericRenderWindow.newInstance({
            background: [1, 1, 1],
        });
    }
    

    animate(){
        this.animationID = requestAnimationFrame( ()=>{this.animate()} );

        

        const now = Date.now();
        const elapsed = now - this.prevTime;

        // if enough time has elapsed, draw the next frame

        if (elapsed > this.fpsInterval) {
            
            this.prevTime = now - (elapsed % this.fpsInterval);

            // Put your drawing code here
            this.rotateCamera();
            

        }     
    }


    rotateCamera(){

        const renderWindow = this.genericRenderWindow.getRenderWindow();
        const renderer = this.genericRenderWindow.getRenderer();
        const camera = renderer.getActiveCamera();

        camera.azimuth(2);
        camera.setViewUp(0, 1, 0);

        renderer.resetCameraClippingRange();
        renderWindow.render();

    }

    componentDidMount(){
        
        this.genericRenderWindow.setContainer(this.refs["renderer"]);


        const renderer = this.genericRenderWindow.getRenderer();
        const renderWindow = this.genericRenderWindow.getRenderWindow();


        //Import STL        
        const reader = vtkSTLReader.newInstance();
        reader.setUrl(mandibleData, {binary:false})
        .then((e)=>{

            const mapper = vtkMapper.newInstance();
            mapper.setInputData(reader.getOutputData());

            const actor = vtkActor.newInstance();
            actor.setMapper(mapper);            

            renderer.addActor(actor);
            renderer.resetCamera();        
            renderWindow.render();            
            this.genericRenderWindow.resize();        
            
            //start animation            
            this.prevTime = Date.now();            
            this.animate();
        });        



    }


    componentWillUnmount(){
        cancelAnimationFrame(this.animationID);
    }

    render(){
        const style={
            width:"100%",
            height:"100%",            
        }

        return(
            <div ref="renderer" style={style}/>
        )
    }
}


export default Slide_1