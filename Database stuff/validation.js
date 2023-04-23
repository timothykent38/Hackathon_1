const validation = new JustValidate("#signup");


validation
.addField("#username", [
    {
    rule: "required"
    }
    
])


.addField("#password",[
    {
        rule: "required"
    }
])

.addField("#password_conformation",[
    {
        validator: (value, fields) => {
            return value === fields["#password"].elem.value;
        } ,
        errorMessage: "Passwords do not match"
    }
])

.onSuccess((event) => {
    document.getElementById("signup").submit();
})