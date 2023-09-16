import "../templates.css";
import jsPDF from 'jspdf';
import html2canvas from "html2canvas";


function Template1(){
    function printDocument() {
        const input = document.getElementById('pdf');
        html2canvas(input,{logging: true,letterRendering: 1,useCORS: true}).then(canvas =>{
            const imgwidth= 250;
            const imgHeight = canvas.height * imgwidth/canvas.width;
            const imgData = canvas.toDataURL('img/png'); 
            const pdf = new jsPDF('p', 'mm', 'a4');
            pdf.addImage(
                imgData, 'PNG',0,0,imgwidth,imgHeight
            );
            pdf.save('CV.pdf');
        })
      }
    return(
        <div className="container m-3">
            <div id="pdf" className="row trow">
                <div className="col-sm-3">
                    <img className="image-t" alt="CV" src="uploads/images.jpeg"/>
                    <div className="left-d">
                        <h3>Contact</h3>
                        <hr/>
                        <div>
                            <div className="contact-h">
                                <b>Phone</b>
                            </div>
                            <p className="contact">+923141234567</p>
                        </div>
                        <div>
                            <div className="contact-h">
                                <b>Email</b>
                            </div>
                            <p className="contact">ABC@gmail.com</p>
                        </div>
                        <div>
                            <div className="contact-h">
                                <b>adress</b>
                            </div>
                            <p className="contact">ABC any where</p>
                        </div>

                        <h3>Education</h3>
                        <hr/>
                        <div>
                            <p className="pass">2010</p>
                            <div className="contact-h">
                                <b>Any Degree</b>
                            </div>
                            <p className="contact">Institute</p>
                        </div><div>
                            <p className="pass">2010</p>
                            <div className="contact-h">
                                <b>Any Degree</b>
                            </div>
                            <p className="contact">Institute</p>
                        </div>
                        <h3>Expertise</h3>
                        <hr/>
                            <ul className="expertise">
                                <li>
                                    UX/UI
                                </li>
                                <li>
                                    UX/UI
                                </li>
                                <li>
                                    UX/UI
                                </li>
                                <li>
                                    UX/UI
                                </li>
                            </ul>
                        <h3>Language</h3>
                        <hr/>
                            <h6>English</h6>
                            <h6>Urdu</h6>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="mx-3">
                        <h1 className="mt-5 mb-0"><b>ZIA UR</b> REHMAN</h1>
                        <h5 className="mb-3">Programmer</h5>
                        <p className="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                        <div id="right-d">
                            <h3>Experience</h3>
                            <hr/>
                            <ul>
                                <li>
                                    <div className="e-m"><b>2019 - 2023</b></div>
                                    <div className="e-comp">
                                        Company Name | Company Adress
                                    </div>
                                    <div className="Position">
                                        <b>Job Position Here</b>
                                    </div>
                                    <p className="e-d">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </li>
                                <li>
                                    <div className="e-m"><b>2019 - 2023</b></div>
                                    <div className="e-comp">
                                        Company Name | Company Adress
                                    </div>
                                    <div className="Position">
                                        <b>Job Position Here</b>
                                    </div>
                                    <p className="e-d">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </li>
                                <li>
                                    <div className="e-m"><b>2019 - 2023</b></div>
                                    <div className="e-comp">
                                        Company Name | Company Adress
                                    </div>
                                    <div className="Position">
                                        <b>Job Position Here</b>
                                    </div>
                                    <p className="e-d">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </li>
                            </ul>

                            <h3>Reference</h3>
                            <hr/>
                            <div className="row">
                                <div className="col">
                                    <div className="Position">
                                        <b>Full Name</b>
                                    </div>
                                        <p className="e-d">Job Position, Company Name</p>
                                    <div className="e-d">
                                        <p className="bm"><b>Phone: </b> +923141234567</p>
                                        <p className="tm"><b>Email: </b> ABC@gmail.com </p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="Position">
                                        <b>Full Name</b>
                                        <p className="e-d">Job Position, Company Name</p>
                                    </div>
                                    <div className="e-d">
                                        <p className="bm"><b>Phone: </b> +923141234567</p>
                                        <p className="tm"><b>Email: </b> ABC@gmail.com </p>
                                    </div>
                                </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={printDocument}>print</button>
        </div>
    )
}
export default Template1;