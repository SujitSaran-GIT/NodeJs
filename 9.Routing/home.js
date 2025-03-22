function getRoleMessage(role) {
    return role === "manager" 
        ? "I am manager" 
        : role === "employee" 
            ? "I am an employee" 
            : "I am an admin";
}

let people = "admin";
console.log(getRoleMessage(people));
