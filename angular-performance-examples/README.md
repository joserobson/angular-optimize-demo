# Angular Performance Examples

This project demonstrates several techniques for optimizing Angular applications.

## Running the application

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the application:**
   ```bash
   ng serve
   ```

## OnPush Change Detection

The first example compares the default change detection strategy with `ChangeDetectionStrategy.OnPush`.

* **Default:** The parent and child components are checked every time change detection runs.
* **OnPush:** The parent and child components are only checked when their inputs change or an event is emitted.

To see the difference, open the browser's developer console and watch the logs as you interact with the components.

## trackBy in ngFor

This example shows how using `trackBy` with `ngFor` can improve performance.

* **Default ngFor:** When the list is updated, Angular re-renders all the DOM elements.
* **ngFor with trackBy:** When the list is updated, Angular only re-renders the DOM elements that have changed.

To see the difference, open the browser's developer tools and inspect the DOM elements as you click the "Update List" buttons.

## Lazy Loading

This example demonstrates how to use lazy loading to improve initial load time.

When you click the "Load Lazy Component" link, the lazy-loaded module is fetched from the server and then the component is rendered. You can see this in the network tab of your browser's developer tools.

## Detaching and Reattaching Change Detection

This example shows how you can manually detach and reattach change detection.

* **Detach:** When you click the "Detach" button, the component is no longer checked for changes.
* **Reattach:** When you click the "Reattach" button, the component is checked for changes again.
* **Detect Changes:** When the component is detached, you can manually trigger change detection by clicking the "Detect Changes" button.
