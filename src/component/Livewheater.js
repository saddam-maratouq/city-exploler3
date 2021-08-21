import React from 'react'
import Card from "react-bootstrap/Card";

import 'bootstrap/dist/css/bootstrap.min.css'; 



export class Livewheater extends React.Component {
    render() {
        return (
            <div>
                
                <>
                    {this.props.show &&
                        this.props.WheatherinfoLife.map((item,idx) => {
                            
                            return(
                                
                            <Card key={idx} style={{ width: '18rem' }}>
                                <Card.Body>

                                    <Card.Text>date: {item.date}</Card.Text>
                                    <Card.Text>description: {item.description}</Card.Text>
                                    <Card.Text>lowTemp: {item.lowTemp}</Card.Text>
                                    <Card.Text>maxTemp: {item.maxTemp}</Card.Text>


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

export default Livewheater
