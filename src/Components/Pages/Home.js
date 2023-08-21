import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AutoLayoutExample() {
  return (
    <Container className='container'>
      <Row>
        <Col style={{minWidth:'fit-content'}}>
        <h5>Make Reservation</h5>
        <form>
            <table className='tbl'>
                <tr>
                    <td><label for='date'>Rental Date & Time :</label></td>
                    <td><input type='datetime-local' id='date'></input></td>
                </tr>
                <tr>
                    <td><label for='rdate'>Return Date & Time :</label></td>
                    <td><input type='datetime-local' id='rdate'></input></td>
                </tr>
                <h6>Pickup Location</h6>
                <tr>
                    <td><label for='loc'>Enter Airport Code</label></td>
                    <td><input type='text' id='loc'></input></td>
                    <td><a href='#href'>Find Airport</a></td>
                </tr>
                <h6>OR</h6>
                <tr>
                    <td><label for='loc'>Enter City</label></td>
                    <td><input type='text' id='loc'></input></td>
                    <td><label for='loc'> State</label></td>
                    <td><input type='text' id='loc'></input></td>
                    <td><button onClick={()=>console.log(5+6)}>Search</button></td>
                </tr>
                <tr>
                    <td style={{textAlign:'end'}}><input type='checkbox'></input></td>
                    <td>I may return the car to different location</td>
                </tr>
                <h6>Return Location</h6>
                <tr>
                    <td><label for='loc'>Enter Airport Code</label></td>
                    <td><input type='text' id='loc'></input></td>
                    <td><a href='#href'>Find Airport</a></td>
                </tr>
                <h6>OR</h6>
                <tr>
                    <td><label for='loc'>Enter City</label></td>
                    <td><input type='text' id='loc'></input></td>
                    <td><label for='loc'> State</label></td>
                    <td><input type='text' id='loc'></input></td>
                    <td><button onClick={()=>console.log(5+6)}>Search</button></td>
                </tr>
                <tr ><td colSpan={4}><button style={{marginTop:'10px'}}>Continue Booking</button></td></tr>
            </table>  
        </form>
        </Col>
        <Col className='homecol2'>2 of 2</Col>   
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;