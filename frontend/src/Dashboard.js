import { useNavigate } from "react-router-dom";

function Dashboard(props){
    const navigate = useNavigate();
    if(props.id!==''){
        return(
            <div>
                Dashboard
            </div>
        )
    }else{
        navigate('/');
    }
}
export default Dashboard;