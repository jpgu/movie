import React, {useEffect} from 'react'
import {Col} from 'antd';

function GridCards(props) {    

    if(props.landingPage){

        return (        
            <Col lg={6} md={8} xs={24}>
                <div style={{position: 'relative'}}>
                    <a href={`/movieDetail/${props.movieId}`}>
                        { props.adult===false &&
                            <img style={{width:'100%', height:'420px'}} src={props.image} alt={props.movieName}/>                            
                        }
                    </a>
                </div>
            </Col>
        )
    }
    else{
        return (        
            <Col lg={6} md={8} xs={24}>
                <div style={{position: 'relative'}}>                    
                    <img style={{width:'100%', height:'420px'}} src={props.image} alt={props.charaterName}/>                    
                </div>
            </Col>
        )
    }
}

export default GridCards