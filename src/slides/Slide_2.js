import React, {Component} from 'react'
import vtkActor from 'vtk.js/Sources/Rendering/Core/Actor';
import vtkGenericRenderWindow from 'vtk.js/Sources/Rendering/Misc/GenericRenderWindow';
import vtkMapper from 'vtk.js/Sources/Rendering/Core/Mapper';
import vtkSTLReader from 'vtk.js/Sources/IO/Geometry/STLReader';

import maxilaData from '../resources/stl/e136-BASE_U.stl';
import mandibleData from '../resources/stl/e137-BASE_L.stl';

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

    componentDidMount(){
        const genericRenderWindow = vtkGenericRenderWindow.newInstance({
            background: [1, 1, 1],
        });
        genericRenderWindow.setContainer(this.refs["renderer"]);


        const renderer = genericRenderWindow.getRenderer();
        const renderWindow = genericRenderWindow.getRenderWindow();


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
                genericRenderWindow.resize();        
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