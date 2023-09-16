import { Link } from "react-router-dom";
import "./home.css";


function Home(){
    return(
        <div className="container home" id="pdf">
            <h1 className="my-5" align='center'>Welcome to CV MAKER!</h1>
            <p>
                We're thrilled to extend a warm welcome to you. Whether you're a new member of our community, a returning visitor, or just passing through, we want you to know that you're an important part of what makes this place special.
            </p>
            <p>
                At <b>CV MAKER </b>, our mission is to provide <b>Free CV making </b> Services. We believe to Serving the nation, and we're dedicated to achieving over goal to Serve over nation or providing the simple and easy to use CV making plate form.
            </p>
            <p>
                This isn't just a website; it's a place where ideas take shape, where connections flourish, and where your aspirations find their wings. Whether you're seeking inspiration, knowledge, or simply a friendly virtual home, you've come to the right place.
            </p>
            <p>
                Remember, you're not just a visitor here; you're a valued member of our growing family. Welcome aboard, and let's embark on an exciting journey of discovery and growth together!"
            </p> 
            <br/>
            <Link to="/Login" className="btn btn-primary my-3">Let's get Started!</Link>
        </div>
    )
}
export default Home;