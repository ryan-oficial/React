import React, {Component} from 'react';
import './index.css';

class Titulo extends Component {

    constructor(){
        super();
    }
        render(){
            return (
                <div className='cor'>
                    <h1>{this.props.texto}</h1>
                    {/* if(this.props.descricao === null){
                        'Não passou a descriçao'
                    }else{
                        this.props.descricao
                    } */}
                    <p>{this.props.descricao || 'Não passou a descriçao'}</p>
                </div>
            )
        }
}
export default Titulo;