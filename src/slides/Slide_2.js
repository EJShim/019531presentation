import React, {Component} from 'react'
import vtkActor from 'vtk.js/Sources/Rendering/Core/Actor';
import vtkGenericRenderWindow from 'vtk.js/Sources/Rendering/Misc/GenericRenderWindow';
import vtkMapper from 'vtk.js/Sources/Rendering/Core/Mapper';
import vtkSTLReader from 'vtk.js/Sources/IO/Geometry/STLReader';
import vtkPointPicker from 'vtk.js/Sources/Rendering/Core/PointPicker';

import LR1 from '../resources/stl/e016-LR1.stl';
import LR2 from '../resources/stl/e017-LR2.stl';
import LR3 from '../resources/stl/e018-LR3.stl';
import LR4 from '../resources/stl/e019-LR4.stl';
import LR5 from '../resources/stl/e020-LR5.stl';
import LR6 from '../resources/stl/e021-LR6.stl';
import LR7 from '../resources/stl/e022-LR7.stl';

import LL1 from '../resources/stl/e024-LL1.stl';
import LL2 from '../resources/stl/e025-LL2.stl';
import LL3 from '../resources/stl/e026-LL3.stl';
import LL4 from '../resources/stl/e027-LL4.stl';
import LL5 from '../resources/stl/e028-LL5.stl';
import LL6 from '../resources/stl/e029-LL6.stl';
import LL7 from '../resources/stl/e030-LL7.stl';




class Slide_2 extends Component{

    constructor(props){
        super(props);
        this.genericRenderWindow = vtkGenericRenderWindow.newInstance({background: [1, 1, 1],});


        this.picker = vtkPointPicker.newInstance();
        this.picker.setPickFromList(false);
        this.picker.initializePickList();

        
    }

    onMouseMove(callData){
        const renderer = this.genericRenderWindow.getRenderer();
        renderer.getActors().forEach(actor=>{
            actor.getProperty().setColor(1, 1, 1);
        })

        const pos = callData.position;
        const point = [pos.x, pos.y, 0.0];        
        this.picker.pick(point, renderer);

        if(this.picker.getActors().length < 1) return;

        const targetActor = this.picker.getActors()[0];

        targetActor.getProperty().setColor(1, 0, 0);


        this.genericRenderWindow.getRenderWindow().render();


    }

    componentDidMount(){
        
        this.genericRenderWindow.setContainer(this.refs["renderer"]);
        


        const renderer = this.genericRenderWindow.getRenderer();
        const renderWindow = this.genericRenderWindow.getRenderWindow();
        renderWindow.getInteractor().onMouseMove(e=>{this.onMouseMove(e);});


        //Import STL        
        const reader = vtkSTLReader.newInstance();

        const data = [LR1, LR2, LR3, LR4, LR5, LR6, LR7, LL1, LL2, LL3, LL4, LL5, LL6, LL7];

        data.forEach((path, idx)=>{
            reader.setUrl(path, {binary:false})
            .then((e)=>{
    
                const mapper = vtkMapper.newInstance();
                mapper.setInputData(reader.getOutputData());
    
                const actor = vtkActor.newInstance();
                actor.setMapper(mapper);                
    
                renderer.addActor(actor);
                renderer.resetCamera();        
                renderWindow.render();            
                this.genericRenderWindow.resize();        
            });
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
};

export default Slide_2