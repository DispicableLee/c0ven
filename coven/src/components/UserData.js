var UserData = (function () {
  //================= data ==========================
  var iD = "";
  var userName = "";
  var passWord = "";
  var iMage = "";

  //======================= get data =========================

  var getId = () => {
    return iD;
  };
  var getUsername = () => {
    return userName;
  };

  var getPassword = ()=>{
    return passWord
  }
  var getImage = () => {
    return iMage;
  };
  //======================= set data ==========================

  var setId = (id)=>{
    iD = id
    localStorage.setItem("id", iD)
  }
  var setUsername = (username) => {
    userName = username;
    localStorage.setItem("username", userName);
  };

  var setPassword = (password)=>{
    passWord = password
    localStorage.setItem("password", passWord)
  }

  var setImage = (image)=>{
    iMage = image
    localStorage.setItem("image",iMage)
  }

  var signOut=()=>{
    localStorage.clear()
  }

  return {
    getId: getId,
    setId: setId,

    getUsername: getUsername,
    setUsername: setUsername,

    getPassword: getPassword,
    setPassword: setPassword,

    getImage: getImage,
    setImage: setImage,

    signOut: signOut
  };
})();

export default UserData;
