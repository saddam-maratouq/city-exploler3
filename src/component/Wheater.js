import React   from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'; 

import { Card } from 'react-bootstrap'; 


 class Wheater extends   React.Component {
    render() {
        return (
            <div>
                
                <>
                    {this.props.show &&
                        this.props.Wheatherinfo.map((item,idx) => {
                            
                            return(
                                
                            <Card key={idx} style={{ width: '16rem' }}>
                                <Card.Body>

                                    <Card.Text>date: {item.date}</Card.Text>
                                    <Card.Text>description: {item.description}</Card.Text>
                                </Card.Body>
                            </Card>
                            )
                        })
                    }

                </>
            
            </div>
        )
    }
}

export default Wheater
