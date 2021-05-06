
import fire from "../fire";
class User {
  #userProps = {
    fName: "fname",
    lName: "lname",
    emailValue: "default@gmail.com",
    password: "",
    gradDate: "",
    location: "",
    timeZone: "",
    SOI: "",
    imageLink: [],
    profileLink: 'https://firebasestorage.googleapis.com/v0/b/profilepicrepo.appspot.com/o/default-user-icon-4.jpg?alt=media&token=a1a0114e-08a4-4771-8448-fc4440e418f5',
  }
  /**
   * Creates a firebase document for this corresponding user
   */
  createUserInDB = () => {

    return fire.firestore().collection('UserData').get().then((snap) => {
      fire
      .firestore()
      .collection("UserData")
      .doc(fire.auth().currentUser.uid)
      .set(this.#userProps);
   })
  
    
  };
  async sha256(message) {
    // encode as UTF-8
    const msgBuffer = new TextEncoder().encode(message);                    

    // hash the message
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

    // convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    // convert bytes to hex string                  
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  
    return String(hashHex);
};
  /**
   * Creates a firebase user with the information in this
   * @return {Promise} If excuted successfully return a promise, o/w throws an error containing corresponding messages
   */

  handleSignUp = () =>{ 
    return fire
      .auth()
      .createUserWithEmailAndPassword(this.#userProps.emailValue, this.#userProps.password).then(()=>{
        if (fire.auth().currentUser != null){
          fire
        .storage()
        .ref(fire.auth().currentUser.uid +"/dog.png").put('https://picsum.photos/id/237/200/300');
         return this.createUserInDB()
      }
    }).catch(err =>{
      return new Promise((resolve, reject) => {
        throw new Error(err.message);
      })
    })

  
  };

  get email() {
    return this.#userProps.emailValue;
  }
  set email(email) {
    this.#userProps.emailValue = email;
  }
  get password() {
    return this.#userProps.password;
  }
  set password(value) {
    var myString = value;
    
    (async () => {
      myString = await this.sha256(myString);
      this.#userProps.password = myString;
    })()
    
    
  }
  get gradDate() {
    return this.#userProps.gradDate;
  }
  set gradDate(value) {
    this.#userProps.gradDate = value;
  }
  get timeZone() {
    return this.#userProps.timeZone;
  }
  set timeZone(value) {
    this.#userProps.timeZone = value;
  }
  get location() {
    return this.#userProps.location;
  }
  set location(value) {
    this.#userProps.location = value;
  }
  get SOI() {
    return this.#userProps.SOI;
  }
  set SOI(value) {
    this.#userProps.SOI = value;
  }
  get firstName() {
    return this.#userProps.fName;
  }
  set firstName(value) {
    this.#userProps.fName = value;
  }
  get lastName() {
    return this.#userProps.lName;
  }
  set lastName(value) {
    this.#userProps.lName = value;
  }
}

  

export default User;
