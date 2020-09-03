import React,{Component} from 'react';
import imageCompression from "browser-image-compression";

export default class ImageCompress extends Component{
    constructor(){
        super();
        this.state={
			originalImage : "",
			clicked: false,
			uploadImage: false,
			originalImage: "",
			originalLink: "",
			compressedLink:
			"http://navparivartan.in/wp-content/uploads/2018/11/placeholder.png",
        }
    }
	
	handleChangeImage = (e) =>{

		const imageFile = e.target.files[0]		
		this.setState({
			 originalLink: URL.createObjectURL(imageFile),
			  originalImage: imageFile,
			  outputFileName: imageFile.name,
			  uploadImage: true
		})
	}
	
	submits = (e) =>{
		// Image Compress
		const options = {
		  maxSizeMB: 1,
		  maxWidthOrHeight: 500,
		  useWebWorker: true
		};
		
		if (options.maxSizeMB >= this.state.originalImage.size / 1024) {
		  alert("Image is too small, can't be Compressed!");
		  return 0;
		}
		
		let output;
				
		imageCompression(this.state.originalImage,options).then(x => {
		output = x;

      const downloadLink = URL.createObjectURL(output);

      this.setState({
        compressedLink: downloadLink
      });
	  });

	this.setState({ clicked: true });
    return 1;
	
	}
	
    render(){
		const ImageCompress = this.state.compressedLink;
        return(
            <div>
				<div className="divTask">
					<h3>Image Compress :</h3>
					<div className="showOutPut">
						<input type="file" name="image" accept="image/*" onChange={this.handleChangeImage}/>
						<button type="button" name="submitbtn" onClick={this.submits} style={{marginLeft:'200px'}}>Compress</button>
						<p>Preview Image :</p>
						<img src={ImageCompress}/><br/><br/>
						<div>
							<a href={ImageCompress} target='_blank'>Preview on Next Tab</a>
							<a href={ImageCompress} download>Download Image</a>
						</div>	
					</div>
				</div>
            </div>
           
        )
    }
}