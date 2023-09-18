import { useNavigate} from 'react-router-dom';
function Upload (props){
    const formData = new FormData();
    const navigation = useNavigate("");
    formData.append('image', props.file);

      const response =fetch('http://192.168.0.104:8081/upload', {
        method: 'post',
        body: formData,
      });
      if (response.ok) {
        console.log('Image uploaded successfully');
        navigation('/CreateCV.js');
      } else {
        console.error('Image upload failed');
      }
  };
export default Upload;