import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router';
import { userAuth } from '../../Pages/Auth/Auth';

function AlertBox() {

    const Navigate = useNavigate();


    return (
        <>
            {


                (
                    <div div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "100px 0px" }}>
                        <Alert style={{ backgroundColor: "#CC0000", color: "black", marginTop: "0px", marginBottom: "0px", padding: "50px 50px" }}>
                            <Alert.Heading style={{ textAlign: "center", paddingBottom: "10px", fontSize: "40px" }}>Warning !!!</Alert.Heading>
                            <h5 style={{ fontWeight: "500", fontFamily: "emoji" }}>Welcome User,
                                Want to access our website you need to login first!
                                Thank You :)
                            </h5>
                            <h6 style={{ fontFamily: "emoji" }}> Nihar Patel</h6>
                            <hr />
                            <p className="mb-0" onClick={() => Navigate('/LoginForm')}>
                                <Alert.Link href="#" style={{ textDecoration: "none", color: "#141a0f" }}>Click Here to login </Alert.Link>
                            </p>
                        </Alert>
                    </div >
                )



            }


        </>

    );
}

export default AlertBox;