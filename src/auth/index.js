
//SIGNUP
export const signup = user => {
    return fetch("http://localhost:8081/signup", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.error("Error de solicitud:", err)); // Cambié a console.error para indicar un error
};

// SIGNIN 
export const signin = (user) => {
    return fetch("http://localhost:8081/signin", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
};

export const authenticate = (jwt, next) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("jwt", JSON.stringify(jwt));
        next();
    }
};

//MENU
export const signout = (next) => {
    if (typeof window !== "undefined") localStorage.removeItem("jwt");
    next();
    return fetch("http://localhost:8081/signout", {
      method: "GET",
    })
      .then((response) => {
        console.log("signout", response);
        return response.json();
      })
      .catch((err) => console.log(err));
  };
  
  export const isAuthenticated = () => {
    if (typeof window === "undefined") {
      return false;
    }
  
    if (localStorage.getItem("jwt")) {
      return JSON.parse(localStorage.getItem("jwt"));
    } else {
      return false;
    }
  };
  