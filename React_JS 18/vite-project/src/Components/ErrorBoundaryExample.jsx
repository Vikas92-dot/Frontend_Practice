import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  ); 
}

function BuggyComponent() {
  throw new Error("Crash ho gaya");
}

function ErrorBoundaryExample(){
    return<>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <BuggyComponent/>
        </ErrorBoundary>
    </>
}
export default ErrorBoundaryExample;