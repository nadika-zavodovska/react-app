function ProfilePicture(){
    const imgUrl = './src/assets/cv_nadika.jpg';
  const handleClick = (e) => e.targrt.style.display = "none";

    return(<img onClick={(e) => handleClick(e)} src={imgUrl}></img>) ;

  

}

export default ProfilePicture;