import React, {Component} from 'react'
import vtkActor from 'vtk.js/Sources/Rendering/Core/Actor';
import vtkGenericRenderWindow from 'vtk.js/Sources/Rendering/Misc/GenericRenderWindow';
import vtkInteractorStyleManipulator from 'vtk.js/Sources/Interaction/Style/InteractorStyleManipulator';
import vtkMapper from 'vtk.js/Sources/Rendering/Core/Mapper';
import vtkSTLReader from 'vtk.js/Sources/IO/Geometry/STLReader';

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
import fragmentShader from '../shaders/fragment.glsl';

class Slide_3 extends Component{

    constructor(props){
        super(props);

        

        this.genericWindowCollection = [vtkGenericRenderWindow.newInstance({background: [1,1,1]}), vtkGenericRenderWindow.newInstance({background: [0,0,0]})];

    }

    synchronizeCamera(e){        

        const targetCamera = this.genericWindowCollection[1].getRenderer().getActiveCamera();
        targetCamera.shallowCopy(e);
        targetCamera.orthogonalizeViewUp();
        targetCamera.setParallelProjection(true);

        this.genericWindowCollection[1].getRenderWindow().render();
    }

    componentDidMount(){
         
        ////Initialize Renderer
        this.genericWindowCollection[0].setContainer(this.refs["renderer1"]);
        this.genericWindowCollection[1].setContainer(this.refs["renderer2"]);

        const renderer0 = this.genericWindowCollection[0].getRenderer();
        const renderWindow0 = this.genericWindowCollection[0].getRenderWindow();
        renderer0.getActiveCamera().onModified(e=>{this.synchronizeCamera(e)});

        const renderer1 = this.genericWindowCollection[1].getRenderer();
        const renderWindow1 = this.genericWindowCollection[1].getRenderWindow();
        renderer1.getActiveCamera().setParallelProjection(false);
        const depthCameraInteractorStyle = vtkInteractorStyleManipulator.newInstance();
        depthCameraInteractorStyle.removeAllManipulators();
        this.genericWindowCollection[1].getInteractor().setInteractorStyle(depthCameraInteractorStyle);



        //Import STL        
        const reader = vtkSTLReader.newInstance();

        const data = [LR1, LR2, LR3, LR4, LR5, LR6, LR7, LL1, LL2, LL3, LL4, LL5, LL6, LL7];

        data.forEach((path, idx)=>{
            reader.setUrl(path, {binary:false})
            .then((e)=>{    
                const mapper0 = vtkMapper.newInstance();
                mapper0.setInputData(reader.getOutputData());
                const actor0 = vtkActor.newInstance();
                actor0.setMapper(mapper0);    
                renderer0.addActor(actor0);

                const mapper1 = vtkMapper.newInstance();
                mapper1.setInputData(reader.getOutputData());

                const mapperSpecificProp = mapper1.getViewSpecificProperties();
                mapperSpecificProp['OpenGL'] = {
                    ShaderReplacements: [],
                    // VertexShaderCode: vertexShader,
                    FragmentShaderCode:fragmentShader,
                    GeometryShaderCode: ''
                };


                const actor1 = vtkActor.newInstance();
                actor1.setMapper(mapper1);
                renderer1.addActor(actor1);
                
                
                
                
                renderer1.addActor(actor1);
                
                
                renderer0.resetCamera();
                renderer1.resetCamera();

                renderWindow0.render();            
                renderWindow1.render();
                
                this.genericWindowCollection[0].resize();
                this.genericWindowCollection[1].resize();
            });
        })

        this.genericWindowCollection[0].resize();
    }

    render(){
        const renderer1Style={
            width:"50%",
            height:"100%",
            backgroundColor:'red',
        }
        const renderer2Style={
            position:'absolute',
            top:0,
            left:'50%',
            width:'50%',
            height:'100%',
            backgroundColor:'blue',
        }


        return(            
            [
                (<div ref="renderer1" style={renderer1Style} key={0}/>),
                (<div ref="renderer2" style={renderer2Style} key={1}/>)            
            ]
        )
    }
};

export default Slide_3