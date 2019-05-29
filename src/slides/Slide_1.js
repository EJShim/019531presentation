import React, {Component} from 'react';
import vtkActor from 'vtk.js/Sources/Rendering/Core/Actor';
import vtkGenericRenderWindow from 'vtk.js/Sources/Rendering/Misc/GenericRenderWindow';
import vtkMapper from 'vtk.js/Sources/Rendering/Core/Mapper';
import vtkSTLReader from 'vtk.js/Sources/IO/Geometry/STLReader';


import mandibleData from '../resources/stl/e137-BASE_L.stl';

class Slide_1 extends Component{

    componentDidMount(){
        const genericRenderWindow = vtkGenericRenderWindow.newInstance({
            background: [1, 1, 1],
        });
        genericRenderWindow.setContainer(this.refs["renderer"]);


        const renderer = genericRenderWindow.getRenderer();
        const renderWindow = genericRenderWindow.getRenderWindow();


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
            

            genericRenderWindow.resize();
        
        })        
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