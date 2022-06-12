# Components Explained
Make a Component(Function) named as App which is returning some statements using return in App.js.
We hv to export every single component(Function) so that I can import somewhere else in App.js.
This is going to trigger the id of root and inject our entire react application inside it.
Full Responsive Website named Movie Land.
Apart from using Components,Hooks, We'll be using external API to get the data for the movies.
API link https://omdbapi.com/apikey.aspx
Include key in api.js as it will be used in future.
let's explore all the ways that how we call this API and get the movies data.
We hv to fetch the data as soon as component App(function) loads.(For this functionality Which hook we hv to choose -> useEffect hook)
We make async function to search movies that means it will take time to fetch the movies data. Async Function means it will take time to fetch the movies data.
Search.svg is just a search icon.
Let's start creating the JSX in return.Remember to use the ClassName inplace of class as we do in HTML.
-> In Input Tag we have second parameter as value which is statically set. To change that static value for search, onChange function is used which takes the callback function as its arguments.We can API in this onChange Function.
-> Search Icon Comes from the Search icon source.
-> Copy the any one object data from the console after adding that data in the console.
-> We use this data as to render the object and what JSX we are writting.
-> To add Simple Box we add this 'https://via.placeholder.com/400' link as default. This image will be shown if API doesn't provide me with real image.
-> Now we Fetch the data from API in single custom component to avoid writing many lines of code for all the movies placeholder.
-> We hv to add JSX extension file such as MovieCard.jsx
-> This above JSX file is created for all the components we made in our website. and Also don't forget to export the component.
->We don't hv access to movie1 in MovieCard.jsx file. So we use here the Props.To avoid using the props everytime,you need to structure the props using object in the argument of the component.
-> Don't Forget to import the component in the App.js file.
-> We hv to call component in the app container and also pass the props.
->Now we import useState and use it in the component.
->Empty Array which is passed in the useState function is to take use of the setMovies function.
->Now we can dynamically pass the movie[0] in the movie1 variable.
-> setMovies(data.search) allows us to populate the movies.

# Search Functionality
For this you hv to use state hook, you can hv multiple states and also multiple useEffect hooks for one component, there is no limit.
Last part is how we render the array of movies when we search in the search box. we use the img(onclick) listener. We call the searchMovies function and pass a new title.