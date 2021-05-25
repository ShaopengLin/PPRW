import fire from "../fire";

const CurrentUser = {
  /**
   * Checks if a user is logged into firebase
   * @return {boolean} true if logged in, false otherwise
   */
  loggedIn: () => {
    if (fire.auth().currentUser != null) {
      return true;
    }
    return false;
  },
  /**
   * Porceed to log the user in with the given information
   * @return {Promise} If excuted successfully return a promise, o/w throws an error containing corresponding messages
   */
  handleLogIn: (email, password) => {
    return fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        return new Promise((resolve, reject) => {
          throw new Error(err.message);
        });
      });
  },

  /**
   * Gets email of current user
   * @return {Promise} If excuted successfully return a promise containing the email, o/w throws an error containing corresponding messages
   */
  getEmail: () => {
    return fire
      .firestore()
      .collection("UserData")
      .doc(fire.auth().currentUser.uid)
      .get()
      .then((doc) => {
        if (doc.data() !== undefined) return doc.data().emailValue;
      })
      .catch((err) => {
        return new Promise((resolve, reject) => {
          throw new Error(err.message);
        });
      });
  },
  /**
   * Sets a new email for current user
   * @throws an error containing corresponding messages
   */
  setEmail: (value) => {
    fire
      .auth()
      .currentUser.updateEmail(value)
      .then(function () {
        let document = fire
          .firestore()
          .collection("UserData")
          .doc(fire.auth().currentUser.uid);
        document.update({ emailValue: value });
        // Update successful.
      })
      .catch((err) => {
        return new Promise((resolve, reject) => {
          throw new Error(err.message);
        });
      });
  },
  /**
   * Gets profile picture link of current user
   * @return {Promise} If excuted successfully return a promise containing the profileLink, o/w throws an error containing corresponding messages
   */
  getProfileLink: () => {
    try {
      return fire
        .firestore()
        .collection("UserData")
        .doc(fire.auth().currentUser.uid)
        .get()
        .then((doc) => {
          if (doc.data() !== undefined) return doc.data().profileLink;
        })
        .catch((err) => {
          return new Promise((resolve, reject) => {
            throw new Error(err.message);
          });
        });
    } catch (err) {
      throw new Error(err.message);
    }
  },
  /**
   * Sets profile picture link of current user
   * @throws an error containing corresponding messages
   */
  setProfileLink: (value) => {
    try {
      let document = fire
        .firestore()
        .collection("UserData")
        .doc(fire.auth().currentUser.uid);
      document.update({ profileLink: value });
    } catch (err) {
      throw new Error(err.message);
    }
  },
  /**
   * Gets last name of current user
   * @return {Promise} If excuted successfully return a promise containing the last name, o/w throws an error containing corresponding messages
   */
  getImageLink: () => {
    try {
      return fire
        .firestore()
        .collection("UserData")
        .doc(fire.auth().currentUser.uid)
        .get()
        .then((queryResult) => {
          return queryResult.data().imageLink;
        });
    } catch (err) {
      throw new Error(err.message);
    }
  },
  setImageLink: (value) => {
    let document = fire
      .firestore()
      .collection("UserData")
      .doc(fire.auth().currentUser.uid);
    document.update({ imageLink: value });
  },
  /**
   * Gets first name of current user
   * @return {Promise} If excuted successfully return a promise containing the first name, o/w throws an error containing corresponding messages
   */
  getFirstName: () => {
    try {
      return fire
        .firestore()
        .collection("UserData")
        .doc(fire.auth().currentUser.uid)
        .get()
        .then((doc) => {
          if (doc.data() !== undefined) return doc.data().fName;
        })
        .catch((err) => {
          return new Promise((resolve, reject) => {
            throw new Error(err.message);
          });
        });
    } catch (err) {
      throw new Error(err.message);
    }
  },
  /**
   * Sets first name of current user
   * @throws an error containing corresponding messages
   */
  setFirstName: (value) => {
    try {
      let document = fire
        .firestore()
        .collection("UserData")
        .doc(fire.auth().currentUser.uid);
      document.update({ fName: value });
    } catch (err) {
      throw new Error(err.message);
    }
  },
  /**
   * Gets last name of current user
   * @return {Promise} If excuted successfully return a promise containing the last name, o/w throws an error containing corresponding messages
   */
  getLastName: () => {
    try{
    return fire
      .firestore()
      .collection("UserData")
      .doc(fire.auth().currentUser.uid)
      .get()
      .then((doc) => {
        if (doc.data() !== undefined) return doc.data().lName;
      })
      .catch((err) => {
        return new Promise((resolve, reject) => {
          throw new Error(err.message);
        });
      });
    } catch (err) {
      throw new Error(err.message);
    }
  },
  /**
   * Sets last name of current user
   * @throws an error containing corresponding messages
   */
  setLastName: (value) => {
    try{
    let document = fire
      .firestore()
      .collection("UserData")
      .doc(fire.auth().currentUser.uid);
    document.update({ lName: value });
  } catch (err) {
    throw new Error(err.message);
  }
  },
  /**
   * Gets graduation date of current user
   * @return {Promise} If excuted successfully return a promise containing the graduation date, o/w throws an error containing corresponding messages
   */
  getGradDate: () => {
    try{
    return fire
      .firestore()
      .collection("UserData")
      .doc(fire.auth().currentUser.uid)
      .get()
      .then((doc) => {
        if (doc.data() !== undefined) return doc.data().gradDate;
      })
      .catch((err) => {
        return new Promise((resolve, reject) => {
          throw new Error(err.message);
        });
      });
    } catch (err) {
      throw new Error(err.message);
    }
  },
   /**
   * Sets graduation date of current user
   * @throws an error containing corresponding messages
   */
  SetgradDate: (value) => {
    try{
    let document = fire
      .firestore()
      .collection("UserData")
      .doc(fire.auth().currentUser.uid);
    document.update({ gradDate: value });
  }catch(err){
    throw new Error(err.message);
  }
  },
  /**
   * Gets time zone of current user
   * @return {Promise} If excuted successfully return a promise containing the time zone, o/w throws an error containing corresponding messages
   */
  getTimeZone: () => {
    try{
    return fire
      .firestore()
      .collection("UserData")
      .doc(fire.auth().currentUser.uid)
      .get()
      .then((doc) => {
        if (doc.data() !== undefined) return doc.data().timeZone;
      })
      .catch((err) => {
        return new Promise((resolve, reject) => {
          throw new Error(err.message);
        });
      });
    }catch(err){
      throw new Error(err.message);
    }
  },
  /**
   * Sets time zone of current user
   * @throws an error containing corresponding messages
   */
  setTimeZone: (value) => {
    try{
    let document = fire
      .firestore()
      .collection("UserData")
      .doc(fire.auth().currentUser.uid);
    document.update({ timeZone: value });
  }catch(err){
    throw new Error(err.message);
  }
  },

  /**
   * Gets location of current user
   * @return {Promise} If excuted successfully return a promise containing the location, o/w throws an error containing corresponding messages
   */
  getLocation: () => {
    try{
    return fire
      .firestore()
      .collection("UserData")
      .doc(fire.auth().currentUser.uid)
      .get()
      .then((doc) => {
        if (doc.data() !== undefined) return doc.data().location;
      })
      .catch((err) => {
        return new Promise((resolve, reject) => {
          throw new Error(err.message);
        });
      });
    }catch(err){
      throw new Error(err.message);
    }
  },
   /**
   * Gets location of current user
   * @throws an error containing corresponding messages
   */
  setLocation: (value) => {
    try{
    let document = fire
      .firestore()
      .collection("UserData")
      .doc(fire.auth().currentUser.uid);
    document.update({ location: value });
  }catch(err){
    throw new Error(err.message);
  }
  },
  /**
   * Gets SQI of current user
   * @return {Promise} If excuted successfully return a promise containing the SQI, o/w throws an error containing corresponding messages
   */
  getSOI: () => {
    try{
    return fire
      .firestore()
      .collection("UserData")
      .doc(fire.auth().currentUser.uid)
      .get()
      .then((doc) => {
        if (doc.data() !== undefined) return doc.data().SQI;
      })
      .catch((err) => {
        return new Promise((resolve, reject) => {
          throw new Error(err.message);
        });
      });
    }catch(err){
      throw new Error(err.message);
    }
  },
  /**
   * Gets SQI of current user
   * @throws an error containing corresponding messages
   */
  setSOI: (value) => {
    try{
    let document = fire
      .firestore()
      .collection("UserData")
      .doc(fire.auth().currentUser.uid);
    document.update({ SOI: value });
    }catch(err){
      throw new Error(err.message);
    }
    /*  fire.firestore().runTransaction(function (transaction) {
        // This code may get re-run multiple times if there are conflicts.
        return transaction.get(document).then(function (sfDoc) {
          if (!sfDoc.exists) {
            throw "Document does not exist!";
          }
  
          // Add one person to the city population.
          // Note: this could be done without a transaction
          //       by updating the population using FieldValue.increment()
          transaction.update(document, { SQI: value });
        });
      });*/
  },
};
export default CurrentUser;
