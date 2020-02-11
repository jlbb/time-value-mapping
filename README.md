# Time-Value Mapping

This project is a [React](https://reactjs.org/docs/getting-started.html) application -created using [create-react-app](https://github.com/facebook/create-react-app)- and TypeScript, which implements a mapping of a time-value series represented in a line chart (using [CanvasJS](https://canvasjs.com/docs/charts/basics-of-creating-html5-chart/) library),
and from which we can update the mapping time-values, intervals, and sub-intervals using the inputs. When a time-value is changed it will trigger the interpolation of the missing time-values within the [minimum, maxixum] interval. The UI of the application is responsive, so it will adapt for smaller screens too.

### Setup

1. After [cloning](https://github.com/jlbb/time-value-mapping) or unzip the file, run in the command shell `npm i` to perform the React and rest of dependencies installation

2. **Development server**: To start the development server `npm run start`. Open in the browser the url `localhost:3000`

3. **Production build**: To create a production build we can use the command `npm run build`

4. **Run production build**: To run the production build created in the previous point, we can use command `npm run start:prod` which will initiate an _http-server_ (open in the browser the url `localhost:8080`) loading the files generate in _/build_

5. **Tests**: Run the command `npm run test` to execute all the unit tests

### Components

1. **TimeSeries**

   - It will load the IntervalMap and LineCharts components, and will manage the redux actions to pass down to the children

   - It makes uses of react-redux hooks (_useSelector_ and _useDispatch_) to load state values and dispatch actions related to request or set a time-value mapping

2. **IntervalMap**

   - It renders an set of Input components for the time-values map, minimum, maximum intervals and minimum and maximum sub-intervals, that can be changed

   - When the values are updated within Input component, it will trigger the pertinent callback passed down to them from this component for each of the input values

3. **LineCharts**

   - It renders a serie of points in a line chart using a React [CanvasJS](https://canvasjs.com/react-charts/) line chart

   - Given some minimum and maximum interval values it will show over the X-axis the range defined

   - Updating the sub-interval values it will zoom in the chart. When values are removed or any of the zoom toolbar buttons is clicked, it will reset the sub-interval zoom.

4. **Input**

   - It renders an input element.

   - The input changes are debounced to avoid triggering callback calls by each inmediate keystroke. We use a custom hook for it (useDebounce)

### Redux

1. **store/configureStore**

   - It will initialize the store configuration using Redux

2. **store/series/actions**

   - Actions to trigger the request to get or put some values and then update the store returning an action

3. **store/series/reducer**

   - Reducer related to the time-value mapping (M) and the minimum and maximum interval values. Manages how the state of the application is reduced depending on the redux actions triggered

4. **store/series/types**

   - Types defined for the actions, reducer, and state of the time-value series

### Utils

1. **src/utils**

   - File with additional functions that serve for general purposes

   - Added interpolation function for given an array of type Point and some min and max limits, generate an interpolation of the missing time-values whitin the [min, max] range.
