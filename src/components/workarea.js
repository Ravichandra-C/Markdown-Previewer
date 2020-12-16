const React=require("react");
export class Workarea extends React.Component{


    render(){
        
          return  (<div className='workarea'> 
                <div id="editor_text"><textarea id='editor' placeholder="" value={this.props.initial}></textarea></div>
                <div id="preview"></div>
            </div>)
    }
}