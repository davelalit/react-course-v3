import React, { Component, ErrorInfo, ReactNode } from 'react';
interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}
interface State {
  hasError: boolean;
}
class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };
// Use static getDerivedStateFromError() to render a fallback UI
  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }
// Use componentDidCatch() to log error information
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    // You can also log the error to an error reporting service
  }
public render() {
    if (this.state.hasError) {
      // Render the fallback UI if an error occurred
      return this.props.fallback || <h1>Sorry.. there was an error</h1>;
    }
return this.props.children;
  }
}
export default ErrorBoundary;


// const App: React.FC = () => {
//   return (
//     <div>
//       <h1>Welcome to the App</h1>
//       <ErrorBoundary fallback={<p style={{ color: 'red' }}>⚠️ An error occurred in the component.</p>}>
//         <BuggyComponent />
//       </ErrorBoundary>
//       <p>The rest of the app still works.</p>
//     </div>
//   );
// };
// export default App;