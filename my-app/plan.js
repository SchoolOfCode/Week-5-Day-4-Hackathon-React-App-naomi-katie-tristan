//PLAN

//1. Written the skeleton for the components and the app
//2. Linked css files to their respective index's 
//3. Make the components
    //Delete button - 
        //connected to delete function
        //use a prototype method to remove an item from the list array 

    //List parent - 
        //????
        //text: List 
        //whenever a new list ite is added - the whol elist re-renders
        //array holding the list items 

    //List items - children - 
        //ul elements
        //text that comes from the input field
            //gets text via prop from input field
        //each item has its own delete button linked to delete function 
        //when created add themselves ot the array

    //Input field - 
            //Add button - will be inside the input field component
            //state attached here
            //onClick event listener - linked to a prop that links to app.
            //initial state ""
            //behaviour function (setBlah) - 

//4. App
        //state declared
            //text, setText
                //const [text, setText] = useState("");
        //Inside of the app function is another function
                //handleChange (event)
                    //setText (event.target.value)
                        //this updates the value of text 
                //inside the function app within the input component
                    //prop = handleChange