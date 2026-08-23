import { Component, type ErrorInfo, type ReactNode } from "react";
import { AlertTriangle } from "lucide-react";

interface State {
  hasError: boolean;
}

/** Catches render errors so a single failure never blanks the whole app. */
export default class ErrorBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error("Application error:", error, info.componentStack);
  }

  private handleReload = () => window.location.reload();

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-bg p-6">
          <div className="max-w-md rounded-2xl border border-border bg-surface p-8 text-center shadow-sm">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent-soft">
              <AlertTriangle className="h-7 w-7 text-accent" aria-hidden="true" />
            </span>
            <h1 className="mt-4 font-serif text-xl font-semibold text-heading">
              Something went wrong
            </h1>
            <p className="mt-2 text-sm text-body">
              The map could not be displayed. This is usually temporary — try reloading the page.
            </p>
            <button
              type="button"
              onClick={this.handleReload}
              className="mt-5 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-on-accent hover:bg-accent-strong"
            >
              Reload the map
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
