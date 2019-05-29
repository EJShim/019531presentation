import React, {Component} from 'react';
import vtkActor from 'vtk.js/Sources/Rendering/Core/Actor';
import vtkCalculator from 'vtk.js/Sources/Filters/General/Calculator';
import vtkConeSource from 'vtk.js/Sources/Filters/Sources/ConeSource';
import vtkGenericRenderWindow from 'vtk.js/Sources/Rendering/Misc/GenericRenderWindow';
import vtkMapper from 'vtk.js/Sources/Rendering/Core/Mapper';

class Slide_1 extends Component{

    componentDidMount(){
        const genericRenderWindow = vtkGenericRenderWindow.newInstance({
            background: [1, 1, 1],
        });
        genericRenderWindow.setContainer(this.refs["renderer"]);


        const renderer = genericRenderWindow.getRenderer();
        const renderWindow = genericRenderWindow.getRenderWindow();

        const coneSource = vtkConeSource.newInstance({ height: 1.0 });

        const mapper = vtkMapper.newInstance();
        mapper.setInputConnection(coneSource.getOutputPort());

        const actor = vtkActor.newInstance();
        actor.setMapper(mapper);

        renderer.addActor(actor);
        renderer.resetCamera();        
        renderWindow.render();
        

        genericRenderWindow.resize();
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