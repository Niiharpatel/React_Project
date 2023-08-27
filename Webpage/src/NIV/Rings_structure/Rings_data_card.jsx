import React from 'react';
import { Button, Card } from 'react-bootstrap';

function Rings_data_card({ data }) {
    return (
        <Card style={{ width: '18rem' }}>
            <img src={data?.img} alt="" />
            <Card.Body>
                <Card.Title>{data?.name}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default Rings_data_card;