// import Component from "./final/01-return";
// import Component from "./final/02-props";
// import Component from "./final/03-state";

import Counter from "./example/1.Counter";
import ToggleSwitch from "./example/2.ToggleSwitch";
import TodoList from "./example/3.To-DoList";
import DataFetcher from "./example/4.FetchData";
import SearchBar from "./example/5.SearchBar";
import DropdownMenu from "./example/6.DropDownMenu";
import Tabs from "./example/7.TabsComponent";
import Modal from "./example/8.Modal";
import Carousel from "./example/9.Carousel";
import StarRating from "./example/10.StarRating";
import RealTimeSearch from "./example/11.RealTimeSearch";
import MultiStepForm from "./example/12.MultiStepForm";
import VirtualizedList from "./example/13.VirtualizedList";
import Form from "./example/14.ReusableFormComponent";
import DynamicForm from "./example/15.DynamicForm";
import PostsProvider from "./example/16.ContextAPI-GlobalState";
import TodoListDragDrop from "./example/18.ToDoListDragDrop";
import CountdownTimer from "./example/19.CountDownTimer";
import ListEventDelegationComponent, { ItemData } from "./example/21.ListEventDelegation";
import OptimizedList from "./example/22.ListMemoizeCallback";
import { ComplexForm } from "./example/24.ComplexFormValidation";
import ErrorBoundary from "./example/25.ErrorBoundary";
import MemoizedButtonCounter from "./example/26.MemoizedButton";
import DataFilterer from "./example/27.UseMemo";
import TrackMouse from "./example/Throttle/components/track-mouse";
import Search from "./example/Debounce/components/search";
import Ingredients from "./example/performance/components/ingredients";
import IngredientInfoHelper from "./example/performance/components/ingredients-info-helper";
import SelectedUserDetails from "./example/ReduxSaga/features/userDetails/SelectedUserDetails";
import AddUserForm from "./example/ReduxSaga/features/usersList/AddUserForm";
import UserList from "./example/ReduxSaga/features/usersList/UserList";
import Search2 from "./example/Debounce/components/search2";
import { Tabs2 } from "./example/Debounce/components/tabs2";
import EffectApp from "./example/29.useLayoutEffectDemo";
import LayoutEffectApp from "./example/30.useLayoutEffectDemo2";
// import SelectedUserDetails from "./example/ReduxThunks/features/userDetails/SelectedUserDetails";
// import AddUserForm from "./example/ReduxThunks/features/usersList/AddUserForm";
// import UserList from "./example/ReduxThunks/features/usersList/UserList";

function App() {
  const items = [{ id: 1, name: 'Lalit' }] as ItemData[];
  const numbers = [1, 2, 3, 4, 5];
   return (
    <div className="app-container">
      <h1>User Management App</h1>
      <AddUserForm />
      <SelectedUserDetails />
      <UserList />
    </div>
  );

  // return (
  //   <main>
  //     {/* Re-renders by lifting component up */}
  //     {/* <Ingredients ingredientInfoHelper={<IngredientInfoHelper />} /> */}
  //     <hr /><br />
  //     <Ingredients />
  //     <hr /><br />
  //     {/* Debounce search */}
  //     {/* <Search /> */}
  //     <Search2 />
  //     <hr /><br />
  //     <div style={{ padding: "2rem" }}>
  //       <h2>React Coding Exercise</h2>
  //       <Tabs2 />
  //     </div>
  //     <hr /><br />
  //     <EffectApp />
  //     <hr /><br /><LayoutEffectApp />
  //     <hr /><br />
  //     {/* Throttle mouse position updates to every 2 seconds */}
  //     <TrackMouse throttleTime={2000} />
  //     <hr /><br />
  //     <DataFilterer data={numbers} />
  //     <hr /><br />
  //     <MemoizedButtonCounter />
  //     <hr /><br />
  //     <ErrorBoundary fallback={<p style={{ color: 'red' }}>⚠️ An error occurred in the component.</p>}>
  //       <ComplexForm />
  //     </ErrorBoundary>
  //     <hr /><br />
  //     <ComplexForm />
  //     <hr /><br />
  //     <OptimizedList items={items} />
  //     <hr /><br />
  //     <ListEventDelegationComponent items={items} />
  //     <Counter />
  //     <hr /><br />
  //     <ToggleSwitch />
  //     <hr /><br />
  //     <TodoList />
  //     <hr /><br />
  //     <DataFetcher />
  //     <hr /><br />
  //     <SearchBar />
  //     <hr /><br />
  //     <DropdownMenu />
  //     <hr /><br />
  //     <Tabs />
  //     <hr /><br />
  //     <Modal />
  //     <hr /><br />
  //     <Carousel />
  //     <hr /><br />
  //     <StarRating />
  //     <hr /><br />
  //     <RealTimeSearch />
  //     <hr /><br />
  //     <MultiStepForm />
  //     <hr /><br />
  //     <VirtualizedList />
  //     <hr /><br />
  //     <Form />
  //     <hr /><br />
  //     <DynamicForm />
  //     <hr /><br />
  //     <PostsProvider />
  //     <hr /><br />
  //     <TodoListDragDrop />
  //     <hr /><br />
  //     <CountdownTimer initialSeconds={60} />
  //     {/* <Component name="John" id={1} >
  //       <p>This is children</p>
  //     </Component> */}
  //     {/* <h2>React & Typescript</h2> */}
  //   </main>
  // );
}

export default App;
