export interface QuestionStateInterface {
    id: number;
    category: string;
    question: string;
    answer: string;
    answer2?: string;
}

export interface QuestionsState {
    questions: QuestionStateInterface[];
}

export const initialState: QuestionsState = {
    questions:
        [
            {
                id: 1,
                category:   "NgRx",
                question:   "What is NgRx and why do we use it in Angular applications?",
                answer:     `<p>NgRx is a state management library which is based on Redux principles. It helps us to manage complex application state in a predictable way using a single store, which is immutable, and unidirectional data flow.</p> 
                            <p> This makes debugging, scaling, and testing easier compared to ad-hoc service or BehaviorSubject approaches. </p>`
            },
            {
                id: 2,
                category:   "NgRx",
                question:   "What are the key concepts of ngrx and how do they work?",
                answer:     `<span>There are four key concepts in ngrx:</span>
                            <ul class="list-items">
                                <li><span class="font-medium">Store:</span> The Store is a centralized state container that holds the application state and allows components to access and update it.</li>
                                <li><span class="font-medium">Actions:</span> Objects that describe what happened in the application.</li>
                                <li><span class="font-medium">Reducers:</span> Reducers are pure functions that take the current state and an action as arguments and return a
                                        new state. They specify how the application's state changes in response to actions sent to the store.</li>
                                <li><span class="font-medium">Selectors:</span> Functions that extract specific pieces of state from the store.</li>
                            </ul>`
            },

            {
                id: 3,
                category:   "NgRx",
                question:   "What are Effects in NgRx?",
                answer:     "Effects are used to handle side effects in your application, such as fetching data from an API or performing other asynchronous operations. They listen for specific actions and can dispatch new actions based on the results of those operations."
            },

            {
                id: 4,
                category:   "NgRx",
                question:   "What is the difference between NgRx and Redux?",
                answer:     "NgRx is inspired by Redux but is specifically designed for Angular applications. It uses RxJS for handling asynchronous operations and provides additional features like Effects and Selectors that are not present in Redux."
            },
            {
                id: 5,
                category:   "NgRx",
                question:   "How do you handle side effects in NgRx?",
                answer:     "Side effects in NgRx are handled using Effects, which listen for specific actions and perform tasks such as making HTTP requests or interacting with external services, and then dispatch new actions based on the results."
            },
            {
                id: 6,
                category:   "NgRx",
                question:   "How do you set up NgRx in an Angular application?",
                answer:     "To set up NgRx in an Angular application, you need to install the @ngrx/store package, create a StoreModule in your AppModule, define your state, actions, reducers, and selectors, and then use the Store service to dispatch actions and select state in your components."
            },
            {
                id: 7,
                category:   "NgRx",
                question:   "what is ngrx router?",
                answer:     "NgRx Router is a library that integrates the Angular Router with NgRx Store, allowing you to manage router state in your application using the same principles as your application state. It provides actions and selectors for working with the router state, making it easier to synchronize the router with your application's state management.",
                answer2:    "NgRx Router (via @ngrx/router-store) is a library that connects Angular’s Router with the NgRx Store, allowing you to manage and observe navigation state as part of your application’s global state. It dispatches actions during each navigation cycle, making route changes predictable, testable, and easier to integrate with other state-managed features."
            },

            {
                id: 7,
                category:   "Angular",
                question:   "What is lazy loading in Angular and how does it improve application performance?",
                answer:     "Lazy loading in Angular is a design pattern where feature modules are loaded only when their routes are accessed, instead of at application startup. This reduces the initial bundle size, improves performance, and makes large applications more scalable. For example, a dashboard or reports module can be lazy-loaded so users only download it when they navigate there, not at app launch."
            },
            {
                id: 8,
                category:   "Angular",
                question:   "What are pure Pipes in angular?",
                answer:     "In Angular, pure pipes are the default type of pipes that only re-run when Angular detects a pure change—meaning a change in primitive values (string, number, boolean, symbol) or a change in object references (arrays, objects, dates). They do not re-execute for in-place mutations of objects or arrays, which makes them highly performant."
            },
            {
                id: 9,
                category:   "Angular",
                question:   "What are HTTP interceptors in Angular and how do they work?",
                answer:     "HTTP interceptors in Angular are a powerful way to modify HTTP requests and responses globally. They work by implementing the HttpInterceptor interface, allowing you to intercept and manipulate HTTP requests before they are sent to the server and responses before they are processed by the application. Common use cases include adding authentication tokens, logging, error handling, and modifying headers."
            },
            {
                id: 10,
                category:   "Angular",
                question:   "What is an HTTP Interceptor?",
                answer:     "HTTP Interceptors are a middleware mechanism in Angular's HttpClient module that intercepts HTTP requests and responses. They allow us to intercept outgoing HTTP requests or incoming HTTP responses and perform operations such as modifying request headers, handling errors, adding authentication tokens, caching responses, and logging."
            },
            {
                id: 10,
                category:   "Angular",
                question:   "What are lifecycle hooks in Angular?",
                answer:     "Lifecycle hooks in Angular are special methods that allow you to tap into key moments in a component's lifecycle, such as when it is created, updated, or destroyed. Some common lifecycle hooks include ngOnInit (called after the component is initialized), ngOnChanges (called when input properties change), ngOnDestroy (called just before the component is destroyed), and ngAfterViewInit (called after the component's view has been fully initialized). These hooks provide opportunities to perform initialization, cleanup, or respond to changes in the component's state."
            }, 
            {
                id: 10,
                category:   "Signals",
                question:   "What are Signals in Angular?",
                answer:     "Signals in Angular is essentially a wrapper around a value that notifies consumers (funtions, components, or services) whenever the value changes. this allow for a reactive data flow, where changes in the signal's value can trigger updateds elsewhere in the application."
            },
            {
                id: 10,
                category:   "JavaScript",
                question:   "What are lifecycle hooks in Angular?",
                answer:     `Every component in Angular has a lifecycle, and different phases it goes through from the time of creation to the time it's destroyed. Angular provides hooks to tap into these phases and trigger changes at specific phases in a lifecycle.
                            <ul class="list-items">
                                <li><span class="font-medium">ngOnChanges:</span> Called before ngOnInit and whenever one or more data-bound input properties change.</li>
                                <li><span class="font-medium">ngOnInit:</span> Called once, after the first ngOnChanges. This is where you can perform component initialization.</li>   
                                <li><span class="font-medium">ngDoCheck:</span> Called during every change detection run, immediately after ngOnChanges and ngOnInit.</li>
                                <li><span class="font-medium">ngAfterContentInit:</span> Called once after the first ngDoCheck when the component's content has been fully initialized.</li>
                                <li><span class="font-medium">ngAfterContentChecked:</span> Called after ngAfterContentInit and every subsequent ngDoCheck when the component's content has been checked.</li>
                                <li><span class="font-medium">ngAfterViewInit:</span> Called once after the first ngAfterContentChecked when the component's view has been fully initialized.</li>
                                <li><span class="font-medium">ngAfterViewChecked:</span> Called after ngAfterViewInit and every subsequent ngAfterContentChecked when the component's view has been checked.</li>
                                <li><span class="font-medium">ngOnDestroy:</span> Called just before the component is destroyed. This is where you can perform cleanup, such as unsubscribing from observables or detaching event handlers.</li>
                            </ul>`
            },
            {
                id: 11,
                category:   "JavaScript",
                question:   "What are closures in JavaScript?",
                answer:     "A closure in JavaScript is a function that has access to its own scope, the outer function's scope, and the global scope. It allows a function to access variables from an enclosing scope even after the outer function has finished executing. Closures are commonly used for data privacy and creating functions with persistent state."
            },
            {
                id: 12,
                category:   "JavaScript",
                question:   "What is the difference between slice() and splice() in JavaScript?",
                answer:     `<ul class="list-items">
                                <li><span class="font-medium">slice():</span> is a method that returns a shallow copy of a portion of an array into a new array, without modifying the original array. It takes two arguments: the start index and the end index (exclusive).</li>
                                <li><span class="font-medium">splice():</span> is a method that changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It takes three arguments: the start index, the number of elements to remove, and any number of elements to add.</li>
                            </ul>`


            },
            {
                id: 13,
                category:   "JavaScript",
                question:   "what is the difference between == and === in JavaScript?",
                answer:     "In JavaScript, == is the equality operator that performs type coercion, meaning it converts the operands to the same type before making the comparison. For example, 5 == '5' would return true because the string '5' is coerced to the number 5. On the other hand, === is the strict equality operator that does not perform type coercion and requires both the value and type to be the same for it to return true. So, 5 === '5' would return false because they are of different types."
            }
        ]
}



