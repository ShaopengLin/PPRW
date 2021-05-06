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
      }).catch((err) => {
        return new Promise((resolve, reject) => {
          throw new Error(err.message);
        });
      });
  },
  setEmail: (value) => {
    fire
      .auth()
      .currentUser.updateEmail(value)
      .then(function () {
        let document = fire
          .firestore()
          .collection("UserData")
          .doc(fire.auth().currentUser.uid);
        fire.firestore().runTransaction(function (transaction) {
          // This code may get re-run multiple times if there are conflicts.
          return transaction.get(document).then(function (sfDoc) {
            if (!sfDoc.exists) {
              throw "Document does not exist!";
            }

            // Add one person to the city population.
            // Note: this could be done without a transaction
            //       by updating the population using FieldValue.increment()
            transaction.update(document, { emailValue: value });
          });
        });
        // Update successful.
      })
      .catch(function (error) {
        // An error happened.
      });
  },
  /**
   * Gets first name of current user
   * @return {Promise} If excuted successfully return a promise containing the first name, o/w throws an error containing corresponding messages
   */
  getProfileLink: () => {
    return fire
      .firestore()
      .collection("UserData")
      .doc(fire.auth().currentUser.uid)
      .get()
      .then((doc) => {
        if (doc.data() !== undefined) return doc.data().profileLink;
      }).catch((err) => {
        return new Promise((resolve, reject) => {
          throw new Error(err.message);
        });
      });
  },
  setProfileLink: (value) => {
    let document = fire
      .firestore()
      .collection("UserData")
      .doc(fire.auth().currentUser.uid);
    fire.firestore().runTransaction(function (transaction) {
      // This code may get re-run multiple times if there are conflicts.
      return transaction.get(document).then(function (sfDoc) {
        if (!sfDoc.exists) {
          throw "Document does not exist!";
        }

        // Add one person to the city population.
        // Note: this could be done without a transaction
        //       by updating the population using FieldValue.increment()
        transaction.update(document, { profileLink: value });
      });
    });
  },
  /**
   * Gets last name of current user
   * @return {Promise} If excuted successfully return a promise containing the last name, o/w throws an error containing corresponding messages
   */
  getImageLink: () => {
    return fire
      .firestore()
      .collection("UserData")
      .doc(fire.auth().currentUser.uid)
      .get()
      .then(queryResult =>{

        return queryResult.data().imageLink;

    })
  },
  setImageLink: (value) => {
    let document = fire
      .firestore()
      .collection("UserData")
      .doc(fire.auth().currentUser.uid);
    fire.firestore().runTransaction(function (transaction) {
      // This code may get re-run multiple times if there are conflicts.
      return transaction.get(document).then(function (sfDoc) {
        if (!sfDoc.exists) {
          throw "Document does not exist!";
        }

        // Add one person to the city population.
        // Note: this could be done without a transaction
        //       by updating the population using FieldValue.increment()
        transaction.update(document, { imageLink: value });
      });
    });
  },
   /**
   * Gets first name of current user
   * @return {Promise} If excuted successfully return a promise containing the first name, o/w throws an error containing corresponding messages
   */
    getFirstName: () => {
      return fire
        .firestore()
        .collection("UserData")
        .doc(fire.auth().currentUser.uid)
        .get()
        .then((doc) => {
          if (doc.data() !== undefined) return doc.data().fName;
        }).catch((err) => {
          return new Promise((resolve, reject) => {
            throw new Error(err.message);
          });
        });
    },
    setFirstName: (value) => {
      let document = fire
        .firestore()
        .collection("UserData")
        .doc(fire.auth().currentUser.uid);
      fire.firestore().runTransaction(function (transaction) {
        // This code may get re-run multiple times if there are conflicts.
        return transaction.get(document).then(function (sfDoc) {
          if (!sfDoc.exists) {
            throw "Document does not exist!";
          }
  
          // Add one person to the city population.
          // Note: this could be done without a transaction
          //       by updating the population using FieldValue.increment()
          transaction.update(document, { fName: value });
        });
      });
    },
    /**
     * Gets last name of current user
     * @return {Promise} If excuted successfully return a promise containing the last name, o/w throws an error containing corresponding messages
     */
    getLastName: () => {
      return fire
        .firestore()
        .collection("UserData")
        .doc(fire.auth().currentUser.uid)
        .get()
        .then((doc) => {
          if (doc.data() !== undefined) return doc.data().lName;
        }).catch((err) => {
          return new Promise((resolve, reject) => {
            throw new Error(err.message);
          });
        });
    },
    setLastName: (value) => {
      let document = fire
        .firestore()
        .collection("UserData")
        .doc(fire.auth().currentUser.uid);
      fire.firestore().runTransaction(function (transaction) {
        // This code may get re-run multiple times if there are conflicts.
        return transaction.get(document).then(function (sfDoc) {
          if (!sfDoc.exists) {
            throw "Document does not exist!";
          }
  
          // Add one person to the city population.
          // Note: this could be done without a transaction
          //       by updating the population using FieldValue.increment()
          transaction.update(document, { lName: value });
        });
      });
    },
    /**
     * Gets graduation date of current user
     * @return {Promise} If excuted successfully return a promise containing the graduation date, o/w throws an error containing corresponding messages
     */
    getGradDate: () => {
      return fire
        .firestore()
        .collection("UserData")
        .doc(fire.auth().currentUser.uid)
        .get()
        .then((doc) => {
          if (doc.data() !== undefined) return doc.data().gradDate;
        }).catch((err) => {
          return new Promise((resolve, reject) => {
            throw new Error(err.message);
          });
        });
    },
    SetgradDate: (value) => {
      let document = fire
        .firestore()
        .collection("UserData")
        .doc(fire.auth().currentUser.uid);
      fire.firestore().runTransaction(function (transaction) {
        // This code may get re-run multiple times if there are conflicts.
        return transaction.get(document).then(function (sfDoc) {
          if (!sfDoc.exists) {
            throw "Document does not exist!";
          }
  
          // Add one person to the city population.
          // Note: this could be done without a transaction
          //       by updating the population using FieldValue.increment()
          transaction.update(document, { gradDate: value });
        });
      });
    },
    /**
     * Gets time zone of current user
     * @return {Promise} If excuted successfully return a promise containing the time zone, o/w throws an error containing corresponding messages
     */
    getTimeZone: () => {
      return fire
        .firestore()
        .collection("UserData")
        .doc(fire.auth().currentUser.uid)
        .get()
        .then((doc) => {
          if (doc.data() !== undefined) return doc.data().timeZone;
        }).catch((err) => {
          return new Promise((resolve, reject) => {
            throw new Error(err.message);
          });
        });
    },
    setTimeZone: (value) => {
      let document = fire
        .firestore()
        .collection("UserData")
        .doc(fire.auth().currentUser.uid);
      fire.firestore().runTransaction(function (transaction) {
        // This code may get re-run multiple times if there are conflicts.
        return transaction.get(document).then(function (sfDoc) {
          if (!sfDoc.exists) {
            throw "Document does not exist!";
          }
  
          // Add one person to the city population.
          // Note: this could be done without a transaction
          //       by updating the population using FieldValue.increment()
          transaction.update(document, { timeZone: value });
        });
      });
    },
  
    /**
     * Gets location of current user
     * @return {Promise} If excuted successfully return a promise containing the location, o/w throws an error containing corresponding messages
     */
    getLocation: () => {
      return fire
        .firestore()
        .collection("UserData")
        .doc(fire.auth().currentUser.uid)
        .get()
        .then((doc) => {
          if (doc.data() !== undefined) return doc.data().location;
        }).catch((err) => {
          return new Promise((resolve, reject) => {
            throw new Error(err.message);
          });
        });
    },
    setLocation: (value) => {
      let document = fire
        .firestore()
        .collection("UserData")
        .doc(fire.auth().currentUser.uid);
      fire.firestore().runTransaction(function (transaction) {
        // This code may get re-run multiple times if there are conflicts.
        return transaction.get(document).then(function (sfDoc) {
          if (!sfDoc.exists) {
            throw "Document does not exist!";
          }
  
          // Add one person to the city population.
          // Note: this could be done without a transaction
          //       by updating the population using FieldValue.increment()
          transaction.update(document, { location: value });
        });
      });
    },
    /**
     * Gets SQI of current user
     * @return {Promise} If excuted successfully return a promise containing the SQI, o/w throws an error containing corresponding messages
     */
    getSOI: () => {
      return fire
        .firestore()
        .collection("UserData")
        .doc(fire.auth().currentUser.uid)
        .get()
        .then((doc) => {
          if (doc.data() !== undefined) return doc.data().SQI;
        }).catch((err) => {
          return new Promise((resolve, reject) => {
            throw new Error(err.message);
          });
        });
    },
    setSOI: (value) => {
      let document = fire
        .firestore()
        .collection("UserData")
        .doc(fire.auth().currentUser.uid);
      fire.firestore().runTransaction(function (transaction) {
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
      });
    },
}
export default CurrentUser;
 